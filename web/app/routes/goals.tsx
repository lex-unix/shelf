import { PlusIcon } from '@heroicons/react/24/outline'
import {
  type LoaderFunction,
  type ActionFunction,
  redirect,
  type MetaFunction
} from '@remix-run/node'
import { useFetchers, useLoaderData } from '@remix-run/react'
import Button from '~/components/button'
import GoalForm from '~/components/goal-form'
import { AnimatePresence } from 'framer-motion'
import goalsApi from '~/utils/goals.server'
import type { GoalData } from '~/types'
import { createGoalSchema, updateGoalSchema } from '~/utils/validation.server'
import Goal from '~/components/goal'
import NavigationList from '~/components/navigation-list'
import Dialog from '~/components/dialog'
import { useContext, useState } from 'react'
import { KeyboardContext } from '~/states/keyboard'
import EditGoalDialog from '~/components/edit-goal-dialog'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import LoadingSpinner from '~/components/loading-spinner'

export const meta: MetaFunction = () => {
  return {
    title: 'Goals | Shelf'
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const api = goalsApi(request)
  const res = await api.getGoals()
  if (res.status === 401) {
    return redirect('/login')
  }

  const data = await res.json()
  return data.goals
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const api = goalsApi(request)

  const _action = form.get('_action')
  if (_action === 'delete') {
    const id = form.get('id') as string
    await api.deleteGoal(id)
  } else if (_action === 'create') {
    const body = createGoalSchema.parse(Object.fromEntries(form))
    await api.createGoal(body)
  } else if (_action === 'edit') {
    const body = updateGoalSchema.parse(Object.fromEntries(form))
    const id = form.get('id') as string
    await api.updateGoal(id, body)
  }
  return null
}

export default function GoalsPage() {
  const goals = useLoaderData<GoalData[]>()
  const [selectedGoal, setSelectedGoal] = useState<GoalData | null>(null)
  const [openEditDialog, setEditDialogOpen] = useState(false)
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const { setKeyboardBlocked } = useContext(KeyboardContext)
  const fetchers = useFetchers()

  const createFetcher = fetchers.find(
    f => f.formAction && f.formAction.startsWith('/goals')
  )
  const isSubmitting = createFetcher?.state === 'submitting'

  const handleEditGoal = (goal: GoalData) => {
    setSelectedGoal(goal)
    setEditDialogOpen(true)
    setKeyboardBlocked(true)
  }

  return (
    <div className="mx-auto max-w-2xl py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">My goals</h1>
        <Dialog
          open={openAddDialog}
          onOpenChange={open => {
            setOpenAddDialog(open)
            setKeyboardBlocked(open)
          }}
        >
          <Dialog.Button>
            <Button leading={<PlusIcon className="h-5 w-5" />}>Add new</Button>
          </Dialog.Button>
          <Dialog.Overlay />
          <Dialog.Content>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Add new goal</h2>
              <Button
                form="goal-form"
                tabIndex={-1}
                disabled={isSubmitting}
                leading={
                  isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <PlusCircleIcon className="h-5 w-5" />
                  )
                }
              >
                {isSubmitting ? 'Adding...' : 'Add new goal'}
              </Button>
            </div>
            <Dialog.Separator />
            <GoalForm />
          </Dialog.Content>
        </Dialog>
      </div>
      <ul className="">
        <NavigationList listLen={goals.length}>
          <AnimatePresence initial={false}>
            {goals.map((goal, i) => (
              <Goal
                key={goal.id}
                goal={goal}
                index={i}
                onEdit={handleEditGoal}
              />
            ))}
          </AnimatePresence>
        </NavigationList>
      </ul>
      {selectedGoal && (
        <EditGoalDialog
          goal={selectedGoal}
          open={openEditDialog}
          onOpen={open => {
            setEditDialogOpen(open)
            setKeyboardBlocked(open)
          }}
        />
      )}
    </div>
  )
}
