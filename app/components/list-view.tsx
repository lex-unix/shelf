import { type Book } from '~/fixtures/book'
import {
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TagIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import Dropdown from './dropdown'
import Keyboard from './keyboard'

const vocab = {
  finished: 'Finished',
  currentlyReading: 'Reading',
  wantToRead: 'Want to read',
  favorite: 'Favorite'
}

interface ListViewProps {
  books: Book[]
}

export default function ListView({ books }: ListViewProps) {
  return (
    <ul>
      {books.map((book, i) => (
        <li
          key={i}
          className="border-b border-b-gray-700 py-5 last:border-none"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2">{book.book}</p>
              <p className="text-gray-400">{book.author}</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="rounded-full bg-white/5 py-2.5 px-4">
                {vocab[book.tag]}
              </div>
              <Dropdown>
                <Dropdown.Button className="rounded focus:ring-2 focus:ring-gray-500">
                  <EllipsisVerticalIcon className="h-6 w-6" />
                </Dropdown.Button>
                <Dropdown.Menu className="!w-[200px]">
                  <Dropdown.MenuItem>
                    <div className="flex items-center justify-between">
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
                    <div className="flex items-center justify-between">
                      <div className="flex flex-1 items-center justify-start">
                        <PencilIcon className="h-5 w-5" />
                        <span className="pl-3">Rename</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Keyboard>⌘</Keyboard>
                        <Keyboard>E</Keyboard>
                      </div>
                    </div>
                  </Dropdown.MenuItem>
                  <Dropdown.MenuItem>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-1 items-center justify-start">
                        <TagIcon className="h-5 w-5" />
                        <span className="pl-3">Add tag</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Keyboard>⌘</Keyboard>
                        <Keyboard>J</Keyboard>
                      </div>
                    </div>
                  </Dropdown.MenuItem>
                  <Dropdown.MenuItem>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-1 items-center justify-start">
                        <TrashIcon className="h-5 w-5" />
                        <span className="pl-3">Delete</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Keyboard>⌘</Keyboard>
                        <Keyboard>⌫</Keyboard>
                      </div>
                    </div>
                  </Dropdown.MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
