import { z } from 'zod'

export const createGoalSchema = z.object({
  total: z.coerce.number(),
  endDate: z.string().nullish(),
  startDate: z.string().nullish()
})

export const createBookSchema = z.object({
  title: z.string(),
  author: z.string(),
  tag: z.enum(['finished', 'wantToRead', 'favorite', 'currentlyReading'])
})

export type CreatedGoal = z.infer<typeof createGoalSchema>
export type CreatedBook = z.infer<typeof createBookSchema>
