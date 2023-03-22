import {
  BookOpenIcon,
  StarIcon,
  BookmarkIcon,
  InboxIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { type ReactNode } from 'react'

export default function Sidebar() {
  return (
    <div className="max-w-[240px]">
      <div className="flex flex-col gap-2 font-medium">
        <SidebarItem>
          <BookOpenIcon className="h-6 w-6" /> <span>All books</span>
        </SidebarItem>
        <SidebarItem>
          <StarIcon className="h-6 w-6" /> <span>Favorites</span>
        </SidebarItem>
        <SidebarItem>
          <BookmarkIcon className="h-6 w-6" /> <span>Currently reading</span>
        </SidebarItem>
        <SidebarItem>
          <InboxIcon className="h-6 w-6" /> <span>Want to read</span>
        </SidebarItem>
        <SidebarItem>
          <CheckIcon className="h-6 w-6" /> <span>Finished</span>
        </SidebarItem>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  children: ReactNode
}

function SidebarItem({ children }: SidebarItemProps) {
  return (
    <div className="flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 hover:bg-white/5">
      {children}
    </div>
  )
}
