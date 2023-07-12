import { NavLink } from '@remix-run/react'
import { type ReactNode } from 'react'

interface LibraryNavLinkProps {
  href: string
  children: ReactNode
}

export default function LibraryNavLink({
  href,
  children
}: LibraryNavLinkProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          isActive ? 'border-b-gray-100' : 'border-b-transparent text-gray-400'
        } -mb-[1px] block border-b border-l border-r border-transparent px-2 text-lg outline-none transition-colors hover:text-gray-100 focus-visible:border-l focus-visible:border-r focus-visible:border-l-gray-500 focus-visible:border-r-gray-500`
      }
    >
      {children}
    </NavLink>
  )
}
