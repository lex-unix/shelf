import { createContext, useRef, useState, type ReactNode } from 'react'
import useKeypress from '~/hooks/use-keypress'

type NavigationListContextProps = {
  selectedIndex: number | undefined
  onKeyboardBlock: (block: boolean) => void
}

export const NavigationListContext = createContext<NavigationListContextProps>({
  selectedIndex: undefined,
  onKeyboardBlock: () => {}
})

interface NavigationListProps {
  listLen: number
  children: ReactNode
}

export default function NavigationList({
  children,
  listLen
}: NavigationListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const [isKeyboardBlocked, setIsKeyboardBlocked] = useState(false)
  const initialPress = useRef(false)

  useKeypress('ArrowDown', () => {
    if (isKeyboardBlocked) return

    if (!initialPress.current) {
      initialPress.current = true
      setSelectedIndex(0)
      return
    }
    if (selectedIndex! < listLen - 1) {
      setSelectedIndex(selectedIndex! + 1)
    }
  })

  useKeypress('ArrowUp', () => {
    if (selectedIndex! > 0) {
      setSelectedIndex(selectedIndex! - 1)
    }
  })

  const handleKeyboardBlock = (block: boolean) => setIsKeyboardBlocked(block)

  return (
    <NavigationListContext.Provider
      value={{
        selectedIndex,
        onKeyboardBlock: handleKeyboardBlock
      }}
    >
      {children}
    </NavigationListContext.Provider>
  )
}
