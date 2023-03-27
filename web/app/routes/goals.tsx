import { PlusIcon } from '@heroicons/react/24/outline'
import { type LoaderArgs, type ActionFunction } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import Button from '~/components/button'
import CircleProgress from '~/components/circle-progress'
import GoalForm from '~/components/goal-form'
import Popover from '~/components/popover'
import { AnimatePresence, motion } from 'framer-motion'
import { createGoal, deleteGoal } from '~/goals.server'

const API = 'http://127.0.0.1:3001/api'

type Goal = {
  id: number
  total: number
  progress: number
}

export const loader = async ({ request }: LoaderArgs) => {
  const res = await fetch(API + '/goals', {
    headers: request.headers,
    credentials: 'include'
  })
  const data = await res.json()
  return data.goals as Goal[]
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()

  const _action = form.get('action')
  if (_action === 'delete') {
    const id = form.get('id') as string
    await deleteGoal(request, id)
  } else if (_action === 'create') {
    const total = parseInt(form.get('total') as string)
    await createGoal(request, total)
  }
  return null
}

export default function GoalsPage() {
  const goals = useLoaderData<typeof loader>()
  const fetcher = useFetcher()

  return (
    <div className="mx-auto max-w-2xl py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Active goals</h1>
        <Popover>
          <Popover.Button>
            <Button leading={<PlusIcon className="h-5 w-5" />}>Add new</Button>
          </Popover.Button>
          <Popover.Content>
            <GoalForm />
          </Popover.Content>
        </Popover>
      </div>
      <ul className="">
        <AnimatePresence initial={false}>
          {goals.map(goal => (
            <motion.li
              key={goal.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ opacity: { duration: 0.2 } }}
            >
              <fetcher.Form
                method="post"
                replace
                className="mb-4 flex items-start rounded-md border border-gray-700 p-6"
              >
                <input type="hidden" name="id" value={goal.id} />
                <input type="hidden" name="action" value="delete" />
                <CircleProgress
                  progress={(goal.progress / goal.total) * 100}
                  currentCount={goal.progress}
                />
                <div className="flex flex-1 items-start justify-between">
                  <div>
                    <p className="text-gray-400">Goal</p>
                    <p className="mt-1">{goal.progress}</p>
                  </div>
                  <button className="text-xl">&times;</button>
                </div>
              </fetcher.Form>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

/*
function GoalItem({ id }: { id: number }) {
  const fetcher = useFetcher()
  const isDeleting = fetcher.submission?.formData.get('id') === id.toString()

  if (isDeleting) return null

  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="rounded-md border border-gray-700"
    >
      <fetcher.Form method="post" replace className="flex items-start p-6">
        <input type="hidden" name="id" value={id} />
        <CircleProgress progress={90} currentCount={9} />
        <div className="flex flex-1 items-start justify-between">
          <div>
            <p className="text-gray-400">Goal</p>
            <p className="mt-1">2023 Reading goals</p>
          </div>
          <button className="text-xl">&times;</button>
        </div>
      </fetcher.Form>
    </motion.li>
  )
}
*/
