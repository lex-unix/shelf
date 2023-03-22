import {
  ListBulletIcon,
  Squares2X2Icon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { type ChangeEvent } from 'react'

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
          className="h-full w-full max-w-sm rounded border border-neutral-700 bg-[#1C1C1C] px-2.5 placeholder:text-neutral-400"
        />
        <div className="flex items-center justify-center rounded border border-neutral-700 p-1">
          <button
            onClick={toggleTileView}
            className={`${
              currentView === 'tile'
                ? 'bg-white/5'
                : 'opacity-60 hover:opacity-100'
            } inline-flex h-8 w-8 items-center justify-center rounded transition-opacity`}
          >
            <Squares2X2Icon className="h-4 w-4" />
          </button>
          <button
            onClick={toggleListView}
            className={`${
              currentView === 'list'
                ? 'bg-white/5'
                : 'opacity-60 hover:opacity-100'
            } inline-flex h-8 w-8 items-center justify-center rounded transition-opacity`}
          >
            <ListBulletIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button className="inline-flex h-full items-center justify-center gap-2.5 rounded bg-neutral-100 px-3 text-sm text-neutral-800">
        <PlusIcon className="h-4 w-4" />
        <span>Add new</span>
      </button>
    </div>
  )
}
