import { type Pool } from 'pg'

type Goal = {
  total: number
}

export default function goalsModel(db: Pool) {
  return {
    getGoals: async function (userId: number) {
      const sql = `SELECT id, total, progress FROM Goal WHERE userId = $1 ORDER BY createdAt DESC`
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    getGoalById: async function (id: string) {
      const sql = `SELECT id, total, progress FROM Goal WHERE id = $1`
      const { rows } = await db.query(sql, [id])
      return rows[0]
    },

    createGoal: async function (goal: Goal, userId: number) {
      const sql = `INSERT INTO Goal (total, userId) VALUES ($1, $2) RETURNING id, total, progress`
      const { rows } = await db.query(sql, [goal.total, userId])
      return rows[0]
    },

    deleteGoal: async function (id: string) {
      const sql = `DELETE FROM Goal WHERE id = $1`
      await db.query(sql, [id])
    }
  }
}
