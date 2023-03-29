import { useCallback, useState } from 'react'

export default function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: string) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue

    const item = window.localStorage.getItem(key)
    return item ?? initialValue
  })

  const setValue = useCallback(
    (value: string) => {
      setStoredValue(value)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}
