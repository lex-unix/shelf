import type { ActionFunction } from '@remix-run/node'
import { Form, useActionData, useNavigation } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import type { z } from 'zod'
import Button from '~/components/button'
import usersApi from '~/utils/users.server'
import { updatePasswordSchema } from '~/utils/validation.server'

type FormError = z.inferFlattenedErrors<
  typeof updatePasswordSchema
>['fieldErrors']

export const action: ActionFunction = async ({ request }) => {
  const api = usersApi(request)
  const formData = await request.formData()
  const parsedBody = updatePasswordSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!parsedBody.success) {
    const error = parsedBody.error.flatten().fieldErrors
    return error
  }
  const res = await api.password(parsedBody.data)
  if (res.status === 401) {
    const error = await res.json()
    return {
      [error.field]: [error.message]
    } as FormError
  }

  return null
}

export default function PasswordPag() {
  const error = useActionData<typeof action>()
  const navigation = useNavigation()
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (navigation.state === 'idle' && !error) {
      formRef.current?.reset()
      inputRef.current?.focus()
    }
  }, [navigation.state, error])

  return (
    <Form ref={formRef} method="POST" className="space-y-4">
      <label className="block text-gray-300">
        Current password
        <input
          ref={inputRef}
          name="currentPassword"
          type="password"
          required
          className={`${
            error?.currentPassword ? '!border-red-600' : ''
          } mt-2 block w-full`}
        />
        {error?.currentPassword && (
          <p className="mt-2 text-red-600">
            {error.currentPassword.join('; ')}
          </p>
        )}
      </label>
      <label className="block text-gray-300">
        New Password
        <input
          name="newPassword"
          type="password"
          required
          className={`${
            error?.newPassword ? '!border-red-600' : ''
          } mt-2 block w-full`}
        />
        {error?.newPassword && (
          <p className="mt-2 text-red-600">{error.newPassword.join('; ')}</p>
        )}
      </label>
      <label className="block text-gray-300">
        Confirm New Password
        <input
          name="confirmNewPassword"
          type="password"
          required
          className={`${
            error?.confirmNewPassword ? '!border-red-600' : ''
          } mt-2 block w-full`}
        />
        {error?.confirmNewPassword && (
          <p className="mt-2 text-red-600">
            {error.confirmNewPassword.join('; ')}
          </p>
        )}
      </label>
      <div className="text-center">
        <Button>
          {navigation.state === 'submitting' ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </Form>
  )
}
