import { NavLink } from '@remix-run/react'

export default function LibraryNav() {
  return (
    <div className="flex h-10 w-full gap-8 border-b border-b-gray-700">
      <NavLink
        to="/library"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? 'border-b-gray-100'
              : 'border-b-transparent text-gray-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-gray-100`
        }
      >
        Books
      </NavLink>
      <NavLink
        to="/library/reviews"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? 'border-b-gray-100'
              : 'border-b-transparent text-gray-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-gray-100`
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="/library/highlights"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? 'border-b-gray-100'
              : 'border-b-transparent text-gray-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-gray-100`
        }
      >
        Highlights
      </NavLink>
    </div>
  )
}
