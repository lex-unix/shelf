import { useEffect, useRef } from 'react'

type Callback = (e: KeyboardEvent) => void

export default function useKeypress(keys: string | string[], cb: Callback) {
  const cbRef = useRef<Callback>()

  useEffect(() => {
    cbRef.current = (e: KeyboardEvent) => {
      if (Array.isArray(keys) ? keys.includes(e.key) : keys === e.key) {
        cb(e)
      }
    }
  }, [keys, cb])

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      cbRef.current?.(e)
    }

    document.addEventListener('keydown', keydown)

    return () => document.removeEventListener('keydown', keydown)
  }, [])
}
