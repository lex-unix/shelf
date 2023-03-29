import { type Pool } from 'pg'

type Goal = {
  total: number
  startDate?: string
  endDate?: string
}

export default function goalsModel(db: Pool) {
  return {
    getGoals: async function (userId: number) {
      const sql = `SELECT id, total, progress, startDate as "startDate", endDate as "endDate" FROM Goal WHERE userId = $1 ORDER BY createdAt DESC`
      const { rows } = await db.query(sql, [userId])
      return rows
    },

    getGoalById: async function (id: string) {
      const sql = `SELECT id, total, progress, startDate as "startDate", endDate as "endDate" FROM Goal WHERE id = $1`
      const { rows } = await db.query(sql, [id])
      return rows[0]
    },

    createGoal: async function (goal: Goal, userId: number) {
      const hasTimePeriod = !!goal.startDate && !!goal.endDate
      let values: Array<number | string> = [goal.total, userId]
      let sql
      if (hasTimePeriod) {
        sql = `INSERT INTO Goal (total, userId, startDate, endDate) VALUES ($1, $2, $3, $4) RETURNING id, total, progress, startDate, endDate`
        values = [...values, goal.startDate as string, goal.endDate as string]
      } else {
        sql = `INSERT INTO Goal (total, userId) VALUES ($1, $2) RETURNING id, total, progress, startDate, endDate`
      }
      const { rows } = await db.query(sql, values)
      return rows[0]
    },

    deleteGoal: async function (id: string) {
      const sql = `DELETE FROM Goal WHERE id = $1`
      await db.query(sql, [id])
    },

    updateGoal: async function (id: string, goal: Goal & { progress: number }) {
      const sql = `UPDATE Goal SET total = $1, progress = $2 WHERE id = $3`
      await db.query(sql, [goal.total, goal.progress, id])
    }
  }
}
