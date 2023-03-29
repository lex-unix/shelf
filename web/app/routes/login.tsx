import { redirect, type ActionFunction } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import Button from '~/components/button'
import type { FormError } from '~/types'
import { login } from '~/utils/users.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const body = Object.fromEntries(formData)
  const res = await login(body)
  if (res.ok) {
    return redirect('/library', { headers: res.headers })
  } else {
    const error: FormError = await res.json()
    return error
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
      <Form method="post" className="w-full space-y-3 md:space-y-5">
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Email</label>
          <input
            name="email"
            autoComplete="off"
            className={`${
              actionData?.field === 'email' ? 'border-red-600 text-red-600' : ''
            } w-full`}
          />
          {actionData?.field === 'email' && (
            <p className="text-red-600">{actionData.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            className={`${
              actionData?.field === 'password'
                ? 'border-red-600 outline-none'
                : ''
            } w-full`}
          />
          {actionData?.field === 'password' && (
            <p className="text-red-600">{actionData.message}</p>
          )}
        </div>
        <div className="mt-2 flex justify-center">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  )
}
