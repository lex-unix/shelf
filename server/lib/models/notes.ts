import type { Pool } from 'pg'

interface Note {
  title: string
  body: string
}

export default function notesModel(db: Pool) {
  return {
    createNote: async function (note: Omit<Note, 'body'>, userId: number) {
      const sql =
        'INSERT INTO Note (title, userId) VALUES ($1, $2) RETURNING id'
      const { rows } = await db.query(sql, [note.title, userId])
      return rows[0].id
    },

    getNotes: async function (userId: number) {
      const sql =
        'SELECT id, title, body, userId as "userId" FROM Note WHERE userId = $1'
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    updateNote: async function (note: Omit<Note, 'title'>, noteId: string) {
      const sql = 'UPDATE Note SET body = $1 WHERE id = $2'
      await db.query(sql, [note.body, noteId])
    },

    deleteNote: async function (id: string) {
      const sql = 'DELETE FROM Note WHERE id = $1'
      await db.query(sql, [id])
    },

    getNoteById: async function (id: string) {
      const sql =
        'SELECT id, title, body, userId as "userId" FROM Note WHERE id = $1'
      const { rows } = await db.query(sql, [id])
      return rows[0]
    }
  }
}
