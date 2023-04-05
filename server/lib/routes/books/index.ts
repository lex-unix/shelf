import type { FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import { type Config } from '../../config/config'
import type {
  CreateRoute,
  GetBookRoute,
  GetBooksRoute,
  UpdateRoute
} from './index.types'
import booksModels from '../../models/books'
import { schema } from './schema'

const books: FastifyPluginCallback<Config> = (server, options, done) => {
  const model = booksModels(server.db)

  server.route<GetBooksRoute>({
    method: 'GET',
    url: options.prefix + 'books',
    schema: schema.getBooks,
    onRequest: [server.authorize],
    handler: async req => {
      const books = await model.getUserBooks(req.session.userId, req.query.tag)
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

  server.route<GetBookRoute>({
    method: 'DELETE',
    url: options.prefix + 'books/:id',
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      const book = await model.getBookById(req.params.id)
      if (!book) {
        return reply.code(404).send({ message: 'Book not found' })
      }

      await model.deleteBook(req.params.id)
      reply.code(204)
    }
  })

  server.route<UpdateRoute>({
    method: 'PUT',
    url: options.prefix + 'books/:id',
    onRequest: [server.authorize],
    handler: async (req, reply) => {
      const book = await model.getBookById(req.params.id)
      if (!book) {
        return reply.code(404).send({ message: 'Book not found' })
      }

      await model.editBook(req.params.id, req.body)
    }
  })

  done()
}

export default fp(books)
