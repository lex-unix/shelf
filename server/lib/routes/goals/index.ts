import fp from 'fastify-plugin'
import type { Config } from '../../config/config'
import type { FastifyPluginCallback } from 'fastify'
import goalsModel from '../../models/goals'
import { schema } from './schema'
import type { CreateRoute, DeleteRoute, GetOneRoute } from './index.types'

const goals: FastifyPluginCallback<Config> = (server, options, done) => {
  const model = goalsModel(server.db)

  server.route({
    method: 'GET',
    url: options.prefix + 'goals',
    schema: schema.getAll,
    onRequest: [server.authorize],
    handler: async req => {
      const goals = await model.getGoals(req.session.userId)
      return { goals }
    }
  })

  server.route<CreateRoute>({
    method: 'POST',
    url: options.prefix + 'goals',
    schema: schema.insert,
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      console.log(req.body.total)
      const goal = await model.createGoal(req.body, req.session.userId)
      reply.code(201)
      return { goal }
    }
  })

  server.route<GetOneRoute>({
    method: 'GET',
    url: options.prefix + 'goals/:id',
    schema: schema.getOne,
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      const goal = await model.getGoalById(req.params.id)
      if (goal) {
        return { goal }
      }

      reply.code(404).send({ message: 'Goal not found' })
    }
  })

  server.route<DeleteRoute>({
    method: 'DELETE',
    url: options.prefix + 'goals/:id',
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      const goal = await model.getGoalById(req.params.id)
      if (!goal) {
        return reply.code(404).send({ message: 'Goal not found' })
      }
      await model.deleteGoal(req.params.id)
      reply.code(204)
    }
  })

  done()
}

export default fp(goals)
