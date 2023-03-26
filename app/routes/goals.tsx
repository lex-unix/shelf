import { PlusIcon } from '@heroicons/react/24/outline'
import { type ActionFunction } from '@remix-run/node'
import Button from '~/components/button'
import CircleProgress from '~/components/circle-progress'
import GoalForm from '~/components/goal-form'
import Popover from '~/components/popover'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const data = Object.fromEntries(form)
  console.log(data)
  await new Promise(resolve => setTimeout(resolve, 2000))
  return data
}

export default function GoalsPage() {
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
      <ul className="space-y-4">
        <li className="flex items-start rounded-md border border-gray-700 p-6">
          <CircleProgress progress={90} currentCount={9} />
          <div>
            <p className="text-gray-400">Goal</p>
            <p className="mt-1">2023 Reading goals</p>
          </div>
        </li>
        <li className="flex items-start rounded-md border border-gray-700 p-6">
          <CircleProgress progress={75} currentCount={12} />
          <div>
            <p className="text-gray-400">Goal</p>
            <p className="mt-1">Programming</p>
          </div>
        </li>
      </ul>
      <div className="mt-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Past goals</h1>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start rounded-md border border-gray-700 p-6">
            <CircleProgress progress={100} currentCount={3} />
            <div>
              <p className="text-gray-400">Goal</p>
              <p className="mt-1">2022 reading goals</p>
            </div>
          </li>
          <li className="flex items-start rounded-md border border-gray-700 p-6">
            <CircleProgress progress={100} currentCount={20} />
            <div>
              <p className="text-gray-400">Goal</p>
              <p className="mt-1">Ukrainian literature</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
