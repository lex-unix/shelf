import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { useFetcher } from '@remix-run/react'
import { useContext, useEffect, useRef, useState } from 'react'
import useKeypress from '~/hooks/use-keypress'
import { KeyboardContext } from '~/states/keyboard'
import type { BookData } from '~/types'
import Dropdown from './dropdown'
import Keyboard from './keyboard'
import { NavigationListContext } from './navigation-list'

const vocab = {
  finished: 'Finished',
  currentlyReading: 'Reading',
  wantToRead: 'Want to read',
  favorite: 'Favorite'
}

interface ListViewItemProps {
  book: BookData
  index: number
  onEdit: (book: BookData) => void
}

export default function ListViewItem({
  book,
  index,
  onEdit
}: ListViewItemProps) {
  const deleteFetcher = useFetcher()
  const [menuOpen, setMenuOpen] = useState(false)
  const { selectedIndex } = useContext(NavigationListContext)
  const { setKeyboardBlocked, keyboardBlocked } = useContext(KeyboardContext)
  const ref = useRef<HTMLLIElement>(null)

  const isSelected = index === selectedIndex

  useKeypress('Enter', () => {
    if (isSelected && !keyboardBlocked) {
      setMenuOpen(true)
      setKeyboardBlocked(true)
    }
  })

  useKeypress(['Meta', 'Backspace'], e => {
    e.preventDefault()
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'Backspace') {
      deleteFetcher.submit(
        { _action: 'delete', id: book.id.toString() },
        { method: 'post', encType: 'multipart/form-data' }
      )
    }
  })

  useKeypress(['Meta', 'e'], e => {
    e.preventDefault()
    if (!menuOpen && !isSelected) return
    if (e.metaKey && e.key === 'e') {
      onEdit(book)
    }
  })

  useEffect(() => {
    if (isSelected && ref.current) {
      const ul = document.querySelector('#kbd-list') as Element
      const { top } = ul.getBoundingClientRect()

      const liHeight = ref.current.offsetHeight
      const listHeight = window.innerHeight - top
      const currentHeight = (selectedIndex + 1) * liHeight

      const isInView = currentHeight <= listHeight
      if (!isInView) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
        console.log('scroolinng')
      }
    }
  }, [isSelected, selectedIndex])

  return (
    <li
      ref={ref}
      className={`list-view px-3 py-5 md:px-6 standalone:px-0`}
      data-state={isSelected ? 'selected' : ''}
    >
      <div className="flex items-center justify-between">
        <div className="pr-5">
          <p className="mb-2">{book.title}</p>
          <p className="text-gray-400">{book.author}</p>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-1">
          <div className="rounded-full bg-white/5 px-4 py-2.5">
            {vocab[book.tag]}
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
              <Dropdown.MenuItem onSelect={() => onEdit(book)}>
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
                <deleteFetcher.Form
                  method="POST"
                  encType="multipart/form-data"
                  className="w-full"
                >
                  <input type="hidden" name="id" value={book.id} />
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
