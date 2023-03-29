import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { useFetcher } from '@remix-run/react'
import { motion } from 'framer-motion'
import CircleProgress from './circle-progress'
import Dropdown from './dropdown'
import Keyboard from './keyboard'

interface GoalProps {
  id: number
  progress: number
  total: number
}

export default function Goal({ id, progress, total }: GoalProps) {
  const del = useFetcher()

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        opacity: { duration: 0.2 }
      }}
    >
      <div className="py-2">
        <div className="flex items-center rounded-md border border-gray-700 p-6">
          <CircleProgress
            progress={(progress / total) * 100}
            currentCount={progress}
          />
          <div className="flex flex-1 items-start justify-between">
            <div>
              <p className="text-gray-400">Goal</p>
              <p className="mt-1">{progress}</p>
            </div>
          </div>

          <Dropdown>
            <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
              <EllipsisVerticalIcon className="h-6 w-6" />
            </Dropdown.Button>

            <Dropdown.Menu>
              <Dropdown.MenuItem>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex flex-1 items-center justify-start">
                    <PencilIcon className="h-5 w-5" />
                    <span className="pl-3">Edit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Keyboard>⌘</Keyboard>
                    <Keyboard>E</Keyboard>
                  </div>
                </div>
              </Dropdown.MenuItem>

              <Dropdown.MenuItem>
                <del.Form method="post">
                  <input type="hidden" name="id" value={id} />
                  <input type="hidden" name="action" value="delete" />
                  <button className="flex w-full items-center justify-between gap-5">
                    <div className="flex flex-1 items-center justify-start">
                      <TrashIcon className="h-5 w-5" />
                      <span className="pl-3">Delete</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Keyboard>⌘</Keyboard>
                      <Keyboard>⌫</Keyboard>
                    </div>
                  </button>
                </del.Form>
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </motion.li>
  )
}
