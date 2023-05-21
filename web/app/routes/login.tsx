import type { MetaFunction, ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form, Link, useActionData } from '@remix-run/react'
import type { z } from 'zod'
import Button from '~/components/button'
import usersApi from '~/utils/users.server'
import { userLoginSchema } from '~/utils/validation.server'

type FormError = z.inferFlattenedErrors<typeof userLoginSchema>['fieldErrors']

export const meta: MetaFunction = () => {
  return {
    title: 'Sign In | Shelf'
  }
}

export const action: ActionFunction = async ({ request }) => {
  const api = usersApi()
  const formData = await request.formData()
  const parsedBody = userLoginSchema.safeParse(Object.fromEntries(formData))

  if (!parsedBody.success) {
    return parsedBody.error.flatten().fieldErrors
  }

  const res = await api.login(parsedBody.data)
  if (res.ok) {
    return redirect('/library/books', { headers: res.headers })
  } else {
    const error = await res.json()
    return {
      [error.field]: [error.message]
    }
  }
}

export default function LoginRoute() {
  const actionData = useActionData<FormError>()

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center pt-10 text-current md:pt-16 lg:pt-24">
      <h1 className="text-center text-2xl font-semibold md:text-3xl">
        Welcome back
      </h1>
      <p className="mb-4 mt-2 text-center text-gray-400 md:mt-3 md:text-lg">
        Please enter your details
      </p>
      <Form method="POST" className="w-full space-y-3 md:space-y-5">
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            autoComplete="off"
            className={`${
              actionData?.email ? 'border-red-600 text-red-600' : ''
            } w-full`}
          />
          {actionData?.email && (
            <p className="text-red-600">{actionData.email.join('; ')}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            minLength={8}
            className={`${
              actionData?.password ? 'border-red-600 outline-none' : ''
            } w-full`}
          />
          {actionData?.password && (
            <p className="text-red-600">{actionData.password.join('; ')}</p>
          )}
        </div>
        <div className="mt-2 flex justify-center">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
      <div className="pt-10 md:pt-14">
        <p className="text-gray-400">
          Don&apos; have an account?{' '}
          <Link to="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
