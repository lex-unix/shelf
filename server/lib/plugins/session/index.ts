import fp from 'fastify-plugin'
import session from '@fastify/session'
import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest
} from 'fastify'
import { type Config } from '../../config/config'
import { Redis } from 'ioredis'
import { RedisStore } from '../../../utils/store'

const redisSession: FastifyPluginCallback<Config> = (server, config, done) => {
  const { redisUrl, cookieSecret, cookieName } = config

  const client = new Redis(redisUrl)

  server.register(session, {
    store: new RedisStore({
      client
    }),
    cookieName: cookieName,
    secret: cookieSecret,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      domain:
        process.env.NODE_ENV === 'production' ? 'kyivangels.com' : undefined
    }
  })

  server.decorate(
    'authorize',
    async (req: FastifyRequest, reply: FastifyReply) => {
      if (!req.session.userId) {
        return reply.code(401).send({ message: 'User is not logged in' })
      }
    }
  )

  done()
}

export default fp(redisSession)
