import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode
} from 'react'
import useKeypress from '~/hooks/use-keypress'
import { KeyboardContext } from '~/states/keyboard'

type NavigationListContextProps = {
  selectedIndex: number | undefined
}

export const NavigationListContext = createContext<NavigationListContextProps>({
  selectedIndex: undefined
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
  const { keyboardBlocked } = useContext(KeyboardContext)
  const initialPress = useRef(false)

  useKeypress('ArrowDown', () => {
    if (keyboardBlocked) return

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
    if (keyboardBlocked) return

    if (selectedIndex! > 0) {
      setSelectedIndex(selectedIndex! - 1)
    }
  })

  return (
    <NavigationListContext.Provider
      value={{
        selectedIndex
      }}
    >
      {children}
    </NavigationListContext.Provider>
  )
}
