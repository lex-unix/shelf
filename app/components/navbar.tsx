import {
  ArrowLeftOnRectangleIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import Avatar from './avatar'
import Dropdown from './dropdown'
import Keyboard from './keyboard'

export default function Navbar() {
  const navigate = useNavigate()

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'L') {
        return navigate('/library')
      }

      if (e.shiftKey && e.key === 'G') {
        return navigate('/goals')
      }

      if (e.shiftKey && e.key === 'P') {
        return navigate('/preferences')
      }
    }

    document.addEventListener('keydown', keyDown)

    return () => document.removeEventListener('keydown', keyDown)
  }, [navigate])

  return (
    <div className="borde-b mt-5 h-10 w-full">
      <div className="flex h-full max-w-5xl items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Shelf</h1>
        <Dropdown>
          <Dropdown.Button className="rounded-full focus:ring focus:ring-orange-400">
            <Avatar
              src="https://ltqrjjxsacmuogzvtlja.supabase.co/storage/v1/object/public/avatar/2/avatar.webp"
              alt="Avatar"
            />
          </Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.MenuItem onSelect={() => navigate('/library')}>
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <BookOpenIcon className="h-6 w-6" />
                  <span className="pl-3">Library</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⇧</Keyboard>
                  <Keyboard>L</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem onSelect={() => console.log('select 1')}>
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <ArrowTrendingUpIcon className="h-6 w-6" />
                  <span className="pl-3">Goals</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⇧</Keyboard>
                  <Keyboard>G</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem onSelect={() => console.log('select 1')}>
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <CogIcon className="h-6 w-6" />
                  <span className="pl-3">Preferences</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Keyboard>⇧</Keyboard>
                  <Keyboard>P</Keyboard>
                </div>
              </div>
            </Dropdown.MenuItem>
            <Dropdown.Separator />
            <Dropdown.MenuItem onSelect={() => console.log('select 1')}>
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                  <span className="pl-3">Log out</span>
                </div>
              </div>
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
