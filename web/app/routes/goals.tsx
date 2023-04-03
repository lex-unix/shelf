import { PlusIcon } from '@heroicons/react/24/outline'
import { type LoaderArgs, type ActionFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Button from '~/components/button'
import GoalForm from '~/components/goal-form'
import { AnimatePresence } from 'framer-motion'
import { createGoal, deleteGoal, updateGoal } from '~/utils/goals.server'
import { API } from '~/constants'
import type { GoalData } from '~/types'
import { createGoalSchema } from '~/utils/validations'
import Goal from '~/components/goal'
import NavigationList from '~/components/navigation-list'
import Dialog from '~/components/dialog'

export const loader = async ({ request }: LoaderArgs) => {
  const res = await fetch(API + '/goals', {
    headers: request.headers,
    credentials: 'include'
  })

  if (res.status === 401) {
    return redirect('/login')
  }

  const data = await res.json()
  return data.goals
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()

  const _action = form.get('_action')
  if (_action === 'delete') {
    const id = form.get('id') as string
    await deleteGoal(request, id)
  } else if (_action === 'create') {
    const body = createGoalSchema.parse(Object.fromEntries(form))
    await createGoal(request, body)
  } else if (_action === 'edit') {
    const body = Object.fromEntries(form)
    const id = form.get('id') as string
    await updateGoal(request, id, body)
  }
  return null
}

export default function GoalsPage() {
  const goals = useLoaderData<GoalData[]>()

  return (
    <div className="mx-auto max-w-2xl py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Active goals</h1>
        <Dialog>
          <Dialog.Button>
            <Button leading={<PlusIcon className="h-5 w-5" />}>Add new</Button>
          </Dialog.Button>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Add new goal</Dialog.Title>
            <Dialog.Description>
              By default new goals will end at the end of the year
            </Dialog.Description>
            <div className="mt-5">
              <GoalForm />
            </div>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog>
      </div>
      <ul className="">
        <AnimatePresence initial={false}>
          <NavigationList listLen={goals.length}>
            {goals.map((goal, i) => (
              <Goal
                key={goal.id}
                id={goal.id}
                progress={goal.progress}
                total={goal.total}
                index={i}
              />
            ))}
          </NavigationList>
        </AnimatePresence>
      </ul>
    </div>
  )
}
