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
      const sql = 'SELECT id, name, email FROM Account WHERE id = $1'
      const result = await db.query(sql, [id])
      return result.rows[0]
    },

    getUserByEmail: async function (email: string) {
      const sql =
        'SELECT id, name, email, password FROM Account WHERE email = $1'
      const result = await db.query(sql, [email])
      return result.rows[0]
    }
  }
}
