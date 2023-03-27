import { type Pool } from 'pg'

type Goal = {
  name: string
}

export default function goalsModel(db: Pool) {
  return {
    getGoals: async function (userId: number) {
      const sql = `SELECT id, name, userId FROM Goal WHERE userId = $1`
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    getGoalById: async function (id: string) {
      const sql = `SELECT id, name FROM Book WHERE id = $1`
      const { rows } = await db.query(sql, [id])
      return rows[0]
    },

    createGoal: async function (goal: Goal, userId: number) {
      const sql = `INSERT INTO Goal (name, userId) VALUES ($1, $2) RETURNING id, name`
      const { rows } = await db.query(sql, [goal.name, userId])
      return rows[0]
    },

    deleteGoal: async function (id: string) {
      const sql = `DELETE FROM Goal WHERE id = $1`
      await db.query(sql, [id])
    }
  }
}
