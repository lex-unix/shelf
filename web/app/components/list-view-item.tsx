import {
  EllipsisVerticalIcon,
  PencilIcon,
  TagIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { useFetcher } from '@remix-run/react'
import { useContext, useEffect, useState } from 'react'
import useKeypress from '~/hooks/use-keypress'
import { KeyboardContext } from '~/states/keyboard'
import type { BookData } from '~/types'
import Button from './button'
import Dialog from './dialog'
import Dropdown from './dropdown'
import Keyboard from './keyboard'
import { NavigationListContext } from './navigation-list'

const vocab = {
  finished: 'Finished',
  currentlyReading: 'Reading',
  wantToRead: 'Want to read',
  favorite: 'Favorite'
}

interface ListViewItemProps extends BookData {
  index: number
}

export default function ListViewItem({
  id,
  title,
  author,
  tag,
  index
}: ListViewItemProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const deleteFetcher = useFetcher()
  const editFetcher = useFetcher()
  const { selectedIndex } = useContext(NavigationListContext)
  const { setKeyboardBlocked } = useContext(KeyboardContext)
  const isSelected = index === selectedIndex

  useEffect(() => {
    if (editFetcher.state === 'idle') {
      setDialogOpen(false)
    }
  }, [editFetcher.state])

  useKeypress('Enter', () => {
    if (isSelected) {
      setMenuOpen(true)
      setKeyboardBlocked(true)
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
      setKeyboardBlocked(true)
    }
  })

  return (
    <li
      className={`list-view px-6 py-5`}
      data-state={isSelected ? 'selected' : ''}
    >
      <Dialog
        open={dialogOpen}
        onOpenChange={open => {
          setKeyboardBlocked(open)
          setDialogOpen(open)
        }}
      >
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit book</Dialog.Title>
          <Dialog.Description>
            You can edit title or author of a book
          </Dialog.Description>
          <editFetcher.Form method="post" className="space-y-4">
            <input type="hidden" name="_action" value="edit" />
            <input type="hidden" name="id" value={id} />
            <label className="block text-gray-300">
              Title
              <input
                name="title"
                defaultValue={title}
                placeholder="Title"
                className="mt-2 block w-full"
              />
            </label>
            <label className="block text-gray-300">
              Author
              <input
                name="author"
                defaultValue={author}
                placeholder="Author"
                className="mt-2 block w-full"
              />
            </label>
            <div className="text-center">
              <Button>
                {editFetcher.state === 'submitting' ? 'Saving...' : 'Continue'}
              </Button>
            </div>
          </editFetcher.Form>
        </Dialog.Content>
      </Dialog>
      <div className="flex items-center justify-between">
        <div className="pr-5">
          <p className="mb-2">{title}</p>
          <p className="text-gray-400">{author}</p>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-1">
          <div className="rounded-full bg-white/5 py-2.5 px-4">
            {vocab[tag]}
          </div>
          <Dropdown
            open={menuOpen}
            onOpenChange={open => {
              setMenuOpen(open)
              setKeyboardBlocked(open)
            }}
          >
            <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
              <EllipsisVerticalIcon className="h-6 w-6" />
            </Dropdown.Button>
            <Dropdown.Menu onCloseAutoFocus={e => e.preventDefault()}>
              <Dropdown.MenuItem onSelect={() => setDialogOpen(true)}>
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
                <div className="flex items-center justify-between gap-5">
                  <div className="flex flex-1 items-center justify-start">
                    <TagIcon className="h-5 w-5 -rotate-90" />
                    <span className="pl-3">Tag</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Keyboard>⌘</Keyboard>
                    <Keyboard>J</Keyboard>
                  </div>
                </div>
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>
                <deleteFetcher.Form method="post" className="w-full">
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
    </li>
  )
}
