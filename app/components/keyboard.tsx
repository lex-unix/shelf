import { type ReactNode } from 'react'

interface KeyboardProps {
  children: ReactNode
}

export default function Keyboard({ children }: KeyboardProps) {
  return (
    <div className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 text-gray-400">
      {children}
    </div>
  )
}
