import { z } from 'zod'

export const userRegisterSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be at least 8 characters' }),
    confirm: z.string()
  })
  .refine(({ password, confirm }) => password === confirm, {
    path: ['confirm'],
    message: "Passwords don't match"
  })

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Must be at least 8 characters' })
})

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
    newPassword: z
      .string()
      .min(8, { message: 'Must be at least 8 characters' }),
    confirmNewPassword: z.string()
  })
  .refine(
    ({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword,
    {
      path: ['confirmNewPassword'],
      message: "Passwords don't match"
    }
  )

export const updateGoalSchema = z.object({
  name: z.string(),
  total: z.coerce.number(),
  progress: z.string(),
  startDate: z.string(),
  endDate: z.string()
})

export type CreatedGoal = z.infer<typeof createGoalSchema>
export type CreatedBook = z.infer<typeof createBookSchema>
export type UpdatedUser = z.infer<typeof updateUserSchema>
export type UpdatedPassword = z.infer<typeof updatePasswordSchema>
export type UpdatedGoal = z.infer<typeof updateGoalSchema>
export type UserRegister = z.infer<typeof userRegisterSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
