import { Outlet } from '@remix-run/react'
import LibraryNavLink from '~/components/library-nav-link'

export default function LibraryPage() {
  return (
    <div className="mt-12 w-full">
      <div className="flex h-10 w-full gap-8 border-b border-b-gray-700">
        <LibraryNavLink href="/library">Books</LibraryNavLink>
        <LibraryNavLink href="/library/reviews">Reviews</LibraryNavLink>
        <LibraryNavLink href="/library/highlights">Highlights</LibraryNavLink>
      </div>
      <Outlet />
    </div>
  )
}
