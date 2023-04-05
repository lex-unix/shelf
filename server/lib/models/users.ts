import type { Pool } from 'pg'

interface UserBase {
  name: string
  email: string
}

export default function usersModel(db: Pool) {
  return {
    registerUser: async function (user: UserBase, hash: string) {
      const sql =
        'INSERT INTO Account (name, password, email) VALUES ($1, $2, $3) RETURNING id'
      const values = [user.name, hash, user.email]
      const result = await db.query(sql, values)
      const { id } = result.rows[0] as { id: number }
      return await this.getUserById(id)
    },

    getUserById: async function (id: number) {
      const sql = 'SELECT id, name, email, password FROM Account WHERE id = $1'
      const result = await db.query(sql, [id])
      return result.rows[0]
    },

    getUserByEmail: async function (email: string) {
      const sql =
        'SELECT id, name, email, password FROM Account WHERE email = $1'
      const result = await db.query(sql, [email])
      return result.rows[0]
    },

    updateUser: async function (user: UserBase, id: number) {
      const sql = `UPDATE Account SET name = $1, email = $2 WHERE id = $3`
      await db.query(sql, [user.name, user.email, id])
    },

    updatePassword: async function (hash: string, id: number) {
      const sql = `UPDATE Account SET password = $1 WHERE id = $2`
      await db.query(sql, [hash, id])
    }
  }
}
