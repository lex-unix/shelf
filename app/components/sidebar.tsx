import {
  BookOpenIcon,
  StarIcon,
  BookmarkIcon,
  InboxIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { Link, useSearchParams } from '@remix-run/react'
import { type ReactNode } from 'react'

export default function Sidebar() {
  return (
    <div className="relative min-w-[220px]">
      <div className="sticky inset-x-0 top-8">
        <div className="flex flex-col gap-2 font-medium">
          <SidebarItem>
            <BookOpenIcon className="h-6 w-6" /> <span>All books</span>
          </SidebarItem>
          <SidebarItem tag="favorite">
            <StarIcon className="h-6 w-6" /> <span>Favorites</span>
          </SidebarItem>
          <SidebarItem tag="currentlyReading">
            <BookmarkIcon className="h-6 w-6" /> <span>Currently reading</span>
          </SidebarItem>
          <SidebarItem tag="wantToRead">
            <InboxIcon className="h-6 w-6" /> <span>Want to read</span>
          </SidebarItem>
          <SidebarItem tag="finished">
            <CheckIcon className="h-6 w-6" /> <span>Finished</span>
          </SidebarItem>
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  tag?: string
  children: ReactNode
}

function SidebarItem({ tag, children }: SidebarItemProps) {
  const href = tag ? `/library?tag=${tag}` : '/library'
  const [params] = useSearchParams()
  const isActive = tag === params.get('tag') || (!tag && !params.get('tag'))

  return (
    <Link
      to={href}
      replace
      className={`${
        isActive ? 'bg-white/5' : 'bg-transparent'
      } flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 outline-none transition-colors hover:bg-white/5 focus-visible:ring focus-visible:ring-gray-500`}
    >
      {children}
    </Link>
  )
}
