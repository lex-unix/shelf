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
import Dialog from './dialog'
import { useContext, useEffect, useState } from 'react'
import Button from './button'
import useKeypress from '~/hooks/use-keypress'
import type { GoalData } from '~/types'
import { NavigationListContext } from './navigation-list'

interface GoalProps extends GoalData {
  index: number
}

export default function Goal({ id, progress, total, index }: GoalProps) {
  const deleteFetcher = useFetcher()
  const editFetcher = useFetcher()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { selectedIndex, onKeyboardBlock } = useContext(NavigationListContext)
  const isSelected = index === selectedIndex

  useEffect(() => {
    if (editFetcher.state === 'idle') {
      setDialogOpen(false)
    }
  }, [editFetcher.state])

  useKeypress('Enter', () => {
    if (isSelected && !dialogOpen) {
      setMenuOpen(true)
      onKeyboardBlock(true)
    }
  })

  useKeypress(['Meta', 'Backspace'], e => {
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'Backspace') {
      deleteFetcher.submit(
        { _action: 'delete', id: id.toString() },
        { method: 'post' }
      )
    }
  })

  useKeypress(['Meta', 'e'], e => {
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'e') {
      setDialogOpen(true)
      onKeyboardBlock(true)
    }
  })

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
      <Dialog
        open={dialogOpen}
        onOpenChange={open => {
          onKeyboardBlock(open)
          setDialogOpen(open)
        }}
      >
        <Dialog.Overlay />
        <Dialog.Content>
          <h2 className="mb-4 text-xl font-medium">Edit goal</h2>
          <editFetcher.Form method="post" className="space-y-3">
            <input type="hidden" name="_action" value="edit" />
            <input type="hidden" name="id" value={id} />
            <label className="block text-gray-400">
              Total
              <input
                name="total"
                defaultValue={total}
                className="mt-2 block w-full"
              />
            </label>
            <label className="block text-gray-400">
              Progress
              <input
                name="progress"
                defaultValue={progress}
                className="mt-2 block w-full"
              />
            </label>
            <div className="mx-auto">
              <Button>
                {editFetcher.state === 'submitting' ? 'Editing' : 'Edit goal'}
              </Button>
            </div>
          </editFetcher.Form>
        </Dialog.Content>
      </Dialog>

      <div className="py-2">
        <div
          className={`${
            isSelected ? 'border-gray-300' : 'border-gray-700'
          } flex items-center rounded-md border p-6`}
        >
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

          <Dropdown
            open={menuOpen}
            onOpenChange={open => {
              onKeyboardBlock(open)
              setMenuOpen(open)
            }}
          >
            <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
              <EllipsisVerticalIcon className="h-6 w-6" />
            </Dropdown.Button>
            <Dropdown.Menu onCloseAutoFocus={e => e.preventDefault()}>
              <Dropdown.MenuItem onSelect={() => setDialogOpen(true)}>
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
                <deleteFetcher.Form method="post">
                  <input type="hidden" name="id" value={id} />
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
