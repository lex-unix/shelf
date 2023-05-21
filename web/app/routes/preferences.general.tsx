import { Form, useActionData, useLoaderData } from '@remix-run/react'
import usersApi from '~/utils/users.server'
import { updateUserSchema } from '~/utils/validation.server'
import Button from '~/components/button'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

type FormError = {
  field: string
  message: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const api = usersApi(request)
  const res = await api.getMe()
  const { user } = await res.json()

  if (!user) {
    return redirect('/login')
  }

  return user
}

export const action: ActionFunction = async ({ request }) => {
  const api = usersApi(request)
  const formData = await request.formData()
  const body = updateUserSchema.parse(Object.fromEntries(formData))
  const res = await api.update(body)
  if (res.status === 409) {
    const error: FormError = await res.json()
    return error
  }
  return null
}

export default function GeneralPage() {
  const loaderData = useLoaderData()
  const error = useActionData<FormError>()
  const isEmailError = error?.field === 'email'
  return (
    <Form replace method="POST" className="space-y-4">
      <label className="block text-gray-300">
        Name
        <input
          name="name"
          defaultValue={loaderData.name}
          required
          className="mt-2 block w-full"
        />
      </label>
      <label className="block text-gray-300">
        Email
        <input
          name="email"
          type="email"
          defaultValue={loaderData.email}
          required
          className={`${
            isEmailError ? '!border-red-600' : ''
          } mt-2 block w-full`}
        />
        {isEmailError && <p className="mt-2 text-red-600">{error.message}</p>}
      </label>
      <div className="text-center">
        <Button>Save</Button>
      </div>
    </Form>
  )
}
