import type { FastifyPluginCallback } from 'fastify'
import type { Config } from '../../config/config'
import fp from 'fastify-plugin'
import { schema } from './schema'
import usersModel from '../../models/users'
import type { LoginRoute, RegisterRoute } from './index.types'
import * as argon2 from 'argon2'

const users: FastifyPluginCallback<Config> = (server, options, done) => {
  const model = usersModel(server.db)

  server.route<RegisterRoute>({
    method: 'POST',
    url: options.prefix + 'users/register',
    schema: schema.register,
    handler: async (req, reply) => {
      const isExistingUser = await model.getUserByEmail(req.body.email)
      if (isExistingUser) {
        return reply
          .code(409)
          .send({ message: 'Email is used by another account', field: 'email' })
      }

      let hash: string
      try {
        hash = await argon2.hash(req.body.password)
        const user = await model.registerUser(req.body, hash)
        req.session.userId = user.id
        reply.code(201)
        return { user }
      } catch (err) {
        server.log.error(err)
      }
    }
  })

  server.route<LoginRoute>({
    method: 'POST',
    url: options.prefix + 'users/login',
    schema: schema.login,
    handler: async (req, reply) => {
      const user = await model.getUserByEmail(req.body.email)

      if (!user) {
        return reply
          .code(404)
          .send({ message: 'Email not found', field: 'email' })
      }

      if (!(await argon2.verify(user.password, req.body.password))) {
        return reply
          .code(401)
          .send({ message: "Passwords don't match", field: 'password' })
      }

      req.session.userId = user.id

      return { user }
    }
  })

  server.route({
    method: 'POST',
    url: options.prefix + 'users/logout',
    handler: async (req, reply) => {
      try {
        await req.session.destroy()
        reply.code(205)
      } catch (err) {
        server.log.error(err)
      }
    }
  })

  server.route({
    method: 'GET',
    url: options.prefix + 'users/me',
    handler: async req => {
      if (!req.session.userId) {
        return { user: null }
      }
      const user = await model.getUserById(req.session.userId)
      return { user }
    }
  })

  done()
}

export default fp(users)
