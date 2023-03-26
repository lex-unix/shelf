import type { FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import { type Config } from '../../config/config'
import type { CreateRoute } from './index.types'
import booksModels from '../../models/books'
import { schema } from './schema'

const books: FastifyPluginCallback<Config> = (server, options, done) => {
  const model = booksModels(server.db)

  server.route({
    method: 'GET',
    url: options.prefix + 'books',
    schema: schema.getBooks,
    onRequest: [server.authorize],
    handler: async req => {
      const books = await model.getUserBooks(req.session.userId)
      return { books }
    }
  })

  server.route<CreateRoute>({
    method: 'POST',
    url: options.prefix + 'books',
    schema: schema.insert,
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      const book = await model.createBook(req.body, req.session.userId)
      reply.code(201)
      return { book }
    }
  })

  done()
}

export default fp(books)
