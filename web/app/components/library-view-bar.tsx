import {
  ListBulletIcon,
  Squares2X2Icon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { type ChangeEvent } from 'react'
import BookForm from './book-form'
import Button from './button'
import Popover from './popover'

interface LibraryViewBarProps {
  currentView: 'list' | 'tile'
  search: string
  toggleListView: () => void
  toggleTileView: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function LibraryViewBar({
  currentView,
  search,
  toggleListView,
  toggleTileView,
  onChange
}: LibraryViewBarProps) {
  return (
    <div className="flex h-10 items-center justify-between gap-8">
      <div className="flex h-full flex-1 gap-5">
        <input
          placeholder="Search..."
          value={search}
          onChange={onChange}
          className="h-full w-full max-w-sm rounded border border-gray-700 bg-[#1C1C1C] px-2.5 outline-none placeholder:text-gray-400 focus:border-gray-500"
        />
        <div className="flex items-center justify-center rounded border border-gray-700 p-1">
          <button
            onClick={toggleTileView}
            className={`${
              currentView === 'tile'
                ? 'bg-white/5'
                : 'opacity-40 hover:opacity-100'
            } inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`}
          >
            <Squares2X2Icon className="h-4 w-4" />
          </button>
          <button
            onClick={toggleListView}
            className={`${
              currentView === 'list'
                ? 'bg-white/5'
                : 'opacity-30 hover:opacity-100'
            } inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`}
          >
            <ListBulletIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="hidden h-10 md:inline-block">
        <Popover>
          <Popover.Button>
            <Button
              leading={<PlusIcon className="h-5 w-5" />}
              className="h-full"
            >
              Add new
            </Button>
          </Popover.Button>
          <Popover.Content>
            <h3 className="mb-4 text-lg font-semibold">New book</h3>
            <BookForm />
          </Popover.Content>
        </Popover>
      </div>
    </div>
  )
}
