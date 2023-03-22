import { NavLink } from '@remix-run/react'

export default function LibraryNav() {
  return (
    <div className="flex h-10 w-full gap-8 border-b border-b-neutral-700">
      <NavLink
        to="/library"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? 'border-b-neutral-100'
              : 'border-b-transparent text-neutral-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-neutral-100`
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
              ? 'border-b-neutral-100'
              : 'border-b-transparent text-neutral-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-neutral-100`
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
              ? 'border-b-neutral-100'
              : 'border-b-transparent text-neutral-400'
          } -mb-[1px] block border-b text-lg transition-colors hover:text-neutral-100`
        }
      >
        Highlights
      </NavLink>
    </div>
  )
}
