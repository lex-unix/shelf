import {
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TagIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { useFetcher } from '@remix-run/react'
import { motion } from 'framer-motion'
import type { BookData } from '~/types'
import Dropdown from './dropdown'
import Keyboard from './keyboard'

const vocab = {
  finished: 'Finished',
  currentlyReading: 'Reading',
  wantToRead: 'Want to read',
  favorite: 'Favorite'
}

interface ListViewProps {
  books: BookData[]
}

export default function ListView({ books }: ListViewProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
    >
      {books.map(book => (
        <ListItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          tag={book.tag}
        />
      ))}
    </motion.ul>
  )
}

interface ListItemProps extends BookData {}

function ListItem({ id, title, author, tag }: ListItemProps) {
  const deleteFetcher = useFetcher()

  return (
    <li className="border-b border-b-gray-700 py-5 last:border-none">
      <div className="flex items-center justify-between">
        <div className="pr-5">
          <p className="mb-2">{title}</p>
          <p className="text-gray-400">{author}</p>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-1">
          <div className="rounded-full bg-white/5 py-2.5 px-4">
            {vocab[tag]}
          </div>
          <Dropdown>
            <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
              <EllipsisVerticalIcon className="h-6 w-6" />
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex flex-1 items-center justify-start">
                    <DocumentDuplicateIcon className="h-5 w-5" />
                    <span className="pl-3">Copy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Keyboard>⌘</Keyboard>
                    <Keyboard>C</Keyboard>
                  </div>
                </div>
              </Dropdown.MenuItem>
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
