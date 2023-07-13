import fp from 'fastify-plugin'
import type { FastifyPluginCallback } from 'fastify'
import type { Config } from '../../config/config'
import notesModel from '../../models/notes'
import type {
  GetNoteById,
  DeleteNote,
  CreateNote,
  UpdateNote
} from './index.types'
import { schema } from './schema'

const notes: FastifyPluginCallback<Config> = (server, options, done) => {
  const model = notesModel(server.db)

  server.route({
    url: options.prefix + 'notes',
    method: 'GET',
    schema: schema.getAll,
    handler: async req => {
      const notes = await model.getNotes(req.session.userId)
      return { notes }
    }
  })

  server.route<GetNoteById>({
    url: options.prefix + 'notes/:id',
    method: 'GET',
    schema: schema.getOne,
    handler: async (req, reply) => {
      const note = await model.getNoteById(req.params.id)
      if (!note) {
        return reply.code(404).send({ message: 'Note not found' })
      }
      return { note }
    }
  })

  server.route<CreateNote>({
    url: options.prefix + 'notes',
    method: 'POST',
    schema: schema.insert,
    handler: async (req, reply) => {
      const id = await model.createNote(req.session.userId)
      reply.code(201)
      return { id }
    }
  })

  server.route<UpdateNote>({
    url: options.prefix + 'notes/:id',
    method: 'PUT',
    schema: schema.update,
    handler: async (req, reply) => {
      const noteId = req.params.id
      const note = await model.getNoteById(noteId)
      if (!note) {
        return reply.code(404).send({ message: 'Note not found' })
      }
      await model.updateNote(req.body as any, noteId)
      reply.code(204)
    }
  })

  server.route<DeleteNote>({
    url: options.prefix + 'notes/:id',
    method: 'DELETE',
    schema: schema.del,
    handler: async (req, reply) => {
      const noteId = req.params.id
      const note = await model.getNoteById(noteId)
      if (!note) {
        return reply.code(404).send({ message: 'Note not found' })
      }
      await model.deleteNote(noteId)
      reply.code(204)
    }
  })

  done()
}

export default fp(notes)
