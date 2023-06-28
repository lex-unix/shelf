import type { Pool } from 'pg'

declare module 'fastify' {
  interface FastifyInstance {
    db: Pool
    authorize: (req: FastifyRequest, reply: FastifyReply) => void
  }

  interface Session {
    userId: number
  }
}
