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
import { useContext, useState } from 'react'
import useKeypress from '~/hooks/use-keypress'
import type { GoalData } from '~/types'
import { NavigationListContext } from './navigation-list'
import { KeyboardContext } from '~/states/keyboard'
import { differenceInDays, formatDistance } from 'date-fns'

interface GoalProps {
  goal: GoalData
  index: number
  onEdit: (goal: GoalData) => void
}

export default function Goal({ goal, index, onEdit }: GoalProps) {
  const deleteFetcher = useFetcher()
  const [menuOpen, setMenuOpen] = useState(false)
  const { selectedIndex } = useContext(NavigationListContext)
  const { setKeyboardBlocked, keyboardBlocked } = useContext(KeyboardContext)

  const isSelected = index === selectedIndex

  const timeLeft = formatDistance(new Date(), new Date(goal.endDate))
  const daysLeft = differenceInDays(new Date(goal.endDate), new Date())

  const status =
    goal.progress === goal.total
      ? 'completed'
      : daysLeft < 0
      ? 'expired'
      : daysLeft <= 3
      ? 'urgent'
      : 'ongoing'

  useKeypress('Enter', () => {
    if (isSelected && !keyboardBlocked) {
      setMenuOpen(true)
      setKeyboardBlocked(true)
    }
  })

  useKeypress(['Meta', 'Backspace'], e => {
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'Backspace') {
      deleteFetcher.submit(
        { _action: 'delete', id: goal.id.toString() },
        { method: 'post' }
      )
    }
  })

  useKeypress(['Meta', 'e'], e => {
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'e') {
      onEdit(goal)
    }
  })

  return (
    <motion.li
      key={goal.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        opacity: { duration: 0.2 }
      }}
    >
      <div className="py-2">
        <div
          className={`${
            isSelected
              ? 'border-transparent ring-2 ring-green-500'
              : 'border-gray-700'
          } flex items-center rounded-md border p-6`}
        >
          <CircleProgress
            progress={(goal.progress / goal.total) * 100}
            currentCount={goal.progress}
          />
          <div className="flex flex-1 items-start justify-between">
            <div>
              <p className="font-medium text-gray-100">{goal.name}</p>
              <p
                className={`${
                  status === 'expired'
                    ? 'text-rose-400'
                    : status === 'urgent'
                    ? 'text-amber-400'
                    : 'text-gray-400'
                }`}
              >
                {status === 'completed'
                  ? 'Completed'
                  : status === 'expired'
                  ? 'Expired'
                  : `${timeLeft} left`}
              </p>
            </div>
          </div>

          <Dropdown
            open={menuOpen}
            onOpenChange={open => {
              setKeyboardBlocked(open)
              setMenuOpen(open)
            }}
          >
            <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
              <EllipsisVerticalIcon className="h-6 w-6" />
            </Dropdown.Button>
            <Dropdown.Menu onCloseAutoFocus={e => e.preventDefault()}>
              <Dropdown.MenuItem onSelect={() => onEdit(goal)}>
                <div className="flex w-full items-center justify-between gap-5">
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
                <deleteFetcher.Form method="POST">
                  <input type="hidden" name="id" value={goal.id} />
                  <input type="hidden" name="_action" value="delete" />
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
                </deleteFetcher.Form>
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </motion.li>
  )
}
