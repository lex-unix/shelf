import { createContext, useState, type ReactNode } from 'react'

type KeyboardContextProps = {
  keyboardBlocked: boolean
  setKeyboardBlocked: (block: boolean) => void
}

export const KeyboardContext = createContext<KeyboardContextProps>({
  keyboardBlocked: false,
  setKeyboardBlocked: () => {}
})

export default function KeyboardProvider({
  children
}: {
  children: ReactNode
}) {
  const [block, setBlock] = useState(false)

  return (
    <KeyboardContext.Provider
      value={{
        keyboardBlocked: block,
        setKeyboardBlocked: (block: boolean) => setBlock(block)
      }}
    >
      {children}
    </KeyboardContext.Provider>
  )
}
