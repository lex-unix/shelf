import type { Pool } from 'pg'

interface Review {
  body: string
  bookId: number
}

interface ReviewWithId extends Review {
  id: number
}

export default function reviewsModel(db: Pool) {
  return {
    createReview: async function (review: Review, userId: number) {
      const sql =
        'INSERT INTO Review (body, bookId, userId) VALUES ($1, $2, $3)'
      await db.query(sql, [review.body, review.bookId, userId])
    },

    getUserReviews: async function (userId: number) {
      const sql =
        'SELECT id, body, userId, bookId AS "bookId" FROM Review WHERE userId = $1'
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    updateReview: async function (review: ReviewWithId) {
      const sql = 'UPDATE Review SET body = $1 WHERE id = $2'
      await db.query(sql, [review.body, review.id])
    },

    deleteReview: async function (id: number) {
      const sql = 'DELETE FROM Review WHERE id = $1'
      await db.query(sql, [id])
    }
  }
}
