import { type Pool } from 'pg'

type Book = {
  author: string
  title: string
  tag: string
}

export default function booksModels(db: Pool) {
  return {
    getUserBooks: async function (userId: number) {
      const sql = `SELECT b.id, b.author, b.title, b.tag FROM Book b WHERE b.userId = $1 ORDER BY b.createdAt DESC`
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    createBook: async function (book: Book, userId: number) {
      const sql = `INSERT INTO Book (author, title, tag, userId) VALUES($1, $2, $3, $4) RETURNING id, author, title, tag`
      const { rows } = await db.query(sql, [
        book.author,
        book.title,
        book.tag,
        userId
      ])
      return rows[0]
    },

    deleteBook: async function (bookId: string) {
      const sql = `DELETE FROM Book WHERE id = $1`
      await db.query(sql, [bookId])
    },

    getBookById: async function (bookId: string) {
      const sql = `SELECT id, author, title FROM Book WHERE id = $1`
      const { rows } = await db.query(sql, [bookId])
      return rows[0]
    }
  }
}
