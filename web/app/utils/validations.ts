import { z } from 'zod'

export const createGoalSchema = z.object({
  name: z.string(),
  total: z.coerce.number(),
  endDate: z.string().nullish(),
  startDate: z.string().nullish()
})

export const createBookSchema = z.object({
  title: z.string(),
  author: z.string(),
  tag: z.enum(['finished', 'wantToRead', 'favorite', 'currentlyReading'])
})

export const updateUserSchema = z.object({
  name: z.string(),
  email: z.string().email()
})

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z.string(),
    confirmNewPassword: z.string()
  })
  .refine(
    ({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword,
    {
      path: ['confirmNewPassword'],
      message: "Password don't match"
    }
  )

export const updateGoalSchema = z.object({
  name: z.string(),
  total: z.coerce.number(),
  progress: z.coerce.number()
})

export type CreatedGoal = z.infer<typeof createGoalSchema>
export type CreatedBook = z.infer<typeof createBookSchema>
export type UpdatedUser = z.infer<typeof updateUserSchema>
export type UpdatedPassword = z.infer<typeof updatePasswordSchema>
export type UpdatedGoal = z.infer<typeof updateGoalSchema>
