import type { Pool } from 'pg'

interface Note {
  body: string
}

export default function notesModel(db: Pool) {
  return {
    createNote: async function (userId: number) {
      const sql = 'INSERT INTO Note (userId) VALUES ($1) RETURNING id'
      const { rows } = await db.query(sql, [userId])
      return rows[0].id
    },

    getNotes: async function (userId: number) {
      const sql =
        'SELECT id, body, userId as "userId" FROM Note WHERE userId = $1'
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    updateNote: async function (note: Note, noteId: string) {
      const sql = 'UPDATE Note SET body = $1 WHERE id = $2'
      await db.query(sql, [note.body, noteId])
    },

    deleteNote: async function (id: string) {
      const sql = 'DELETE FROM Note WHERE id = $1'
      await db.query(sql, [id])
    },

    getNoteById: async function (id: string) {
      const sql = 'SELECT id, body, userId as "userId" FROM Note WHERE id = $1'
      const { rows } = await db.query(sql, [id])
      return rows[0]
    }
  }
}
