import { Outlet } from '@remix-run/react'
import LibraryNav from '~/components/library-nav'

export default function LibraryPage() {
  return (
    <div className="mt-12 w-full">
      <LibraryNav />
      <Outlet />
    </div>
  )
}
