import { type Pool } from 'pg'

type Book = {
  author: string
  title: string
  tag: string
  cover?: string
}

export default function booksModels(db: Pool) {
  return {
    getUserBooks: async function (userId: number, tag?: string) {
      let values: Array<number | string> = [userId]
      let sql
      if (tag) {
        sql = `SELECT id, author, title, tag, cover FROM Book WHERE userId = $1 AND tag = $2 ORDER BY createdAt DESC`
        values = [...values, tag]
      } else {
        sql = `SELECT id, author, title, tag, cover FROM Book WHERE userId = $1 ORDER BY createdAt DESC`
      }
      const { rows } = await db.query(sql, values)
      return rows
    },

    createBook: async function (book: Book, userId: number) {
      let sql
      const values = [book.author, book.title, book.tag, userId]
      if (book.cover) {
        sql = `INSERT INTO Book (author, title, tag, userId, cover) VALUES($1, $2, $3, $4, $5) RETURNING id, author, title, tag, cover`
        values.push(book.cover)
      } else {
        sql = `INSERT INTO Book (author, title, tag, userId) VALUES($1, $2, $3, $4) RETURNING id, author, title, tag`
      }
      const { rows } = await db.query(sql, values)
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
    },

    editBook: async function (id: string, book: Book) {
      const sql = `UPDATE Book SET author = $1, title = $2, tag = $3 WHERE id = $4`
      await db.query(sql, [book.author, book.title, book.tag, id])
    }
  }
}
