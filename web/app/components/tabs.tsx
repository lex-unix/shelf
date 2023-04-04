import { NavLink } from '@remix-run/react'
import { type ReactNode } from 'react'

export default function Tabs({ children }: { children: ReactNode }) {
  return <div className="flex items-center">{children}</div>
}

function TabsItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `${
          isActive
            ? 'border-b-gray-100 text-gray-100'
            : 'border-b-transparent text-gray-400'
        } border-b p-2.5 text-lg font-medium`
      }
    >
      {children}
    </NavLink>
  )
}

Tabs.Item = TabsItem
