import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import Avatar from './avatar'

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
        <Avatar
          src="https://ltqrjjxsacmuogzvtlja.supabase.co/storage/v1/object/public/avatar/2/avatar.webp"
          alt="Avatar"
        />
      </div>
    </div>
  )
}
