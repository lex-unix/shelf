import { type Pool } from 'pg'

type Book = {
  author: string
  title: string
}

export default function booksModels(db: Pool) {
  return {
    getUserBooks: async function (userId: number) {
      const sql = `SELECT b.id, b.author, b.title FROM Book b WHERE b.userId = $1`
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    createBook: async function (book: Book, userId: number) {
      const sql = `INSERT INTO Book (author, title, userId) VALUES($1, $2, $3) RETURNING id, author, title`
      const { rows } = await db.query(sql, [book.author, book.title, userId])
      return rows[0]
    }
  }
}
