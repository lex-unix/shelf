import { Outlet } from '@remix-run/react'
import Tabs from '~/components/tabs'

export default function PreferencesPage() {
  return (
    <div className="mt-6 md:mt-12">
      <Tabs>
        <Tabs.Item to="/preferences/general">General</Tabs.Item>
        <Tabs.Item to="/preferences/password">Password</Tabs.Item>
      </Tabs>
      <div className="mx-auto mt-5 max-w-xs">
        <Outlet />
      </div>
    </div>
  )
}
