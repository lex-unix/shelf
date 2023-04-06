import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { useFetcher, useNavigate } from '@remix-run/react'
import useKeypress from '~/hooks/use-keypress'
import Dropdown from './dropdown'
import Keyboard from './keyboard'

export default function Navbar() {
  const navigate = useNavigate()
  const logoutFetcher = useFetcher()

  useKeypress(['Meta', 'k'], e => {
    if (e.metaKey && e.key === 'k') {
      navigate('/library')
    }
  })

  useKeypress(['Meta', 'g'], e => {
    if (e.metaKey && e.key === 'g') {
      navigate('/goals')
    }
  })

  useKeypress(['Meta', 'o'], e => {
    if (e.metaKey && e.key === 'o') {
      navigate('/preferences/general')
    }
  })

  return (
    <div className="borde-b mt-5 h-10 w-full">
      <div className="flex h-full max-w-5xl items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Shelf</h1>
        <Dropdown>
          <Dropdown.Button className="rounded-full focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-500">
            <UserCircleIcon className="h-7 w-7" />
          </Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.MenuItem onSelect={() => navigate('/library')}>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-1 items-center justify-start">
                  <BookOpenIcon className="h-6 w-6" />
                  <span className="pl-3">Library</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⌘</Keyboard>
                  <Keyboard>K</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem onSelect={() => navigate('/goals')}>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-1 items-center justify-start">
                  <ArrowTrendingUpIcon className="h-6 w-6" />
                  <span className="pl-3">Goals</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⌘</Keyboard>
                  <Keyboard>G</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem
              onSelect={() => navigate('/preferences/general')}
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-1 items-center justify-start">
                  <CogIcon className="h-6 w-6" />
                  <span className="pl-3">Preferences</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⌘</Keyboard>
                  <Keyboard>O</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.Separator />
            <Dropdown.MenuItem
              onSelect={() =>
                logoutFetcher.submit({ _action: 'logout' }, { method: 'post' })
              }
            >
              <logoutFetcher.Form
                method="post"
                className="flex items-center justify-between"
              >
                <input type="hidden" name="_action" value="logout" />
                <button className="flex flex-1 items-center justify-start">
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                  <span className="pl-3">Log out</span>
                </button>
              </logoutFetcher.Form>
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
