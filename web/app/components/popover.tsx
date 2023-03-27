import * as RadixPopover from '@radix-ui/react-popover'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface PopoverContextProps {
  open: boolean
}

const PopoverContext = createContext<PopoverContextProps>({
  open: false
})

export default function Popover({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <PopoverContext.Provider value={{ open }}>
      <RadixPopover.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixPopover.Root>
    </PopoverContext.Provider>
  )
}

function PopoverButton({ children }: { children: ReactNode }) {
  return (
    <RadixPopover.Trigger asChild className="data-[state=open]:opacity-70">
      {children}
    </RadixPopover.Trigger>
  )
}
PopoverButton.displayName = 'PopoverButton'

function PopoverContent({ children }: { children: ReactNode }) {
  const { open } = useContext(PopoverContext)

  return (
    <AnimatePresence>
      {open && (
        <RadixPopover.Portal forceMount>
          <RadixPopover.Content
            side="bottom"
            sideOffset={12}
            align="end"
            asChild
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.2 } }}
              className="rounded-lg border border-gray-700 bg-gray-900 py-7 px-8"
            >
              {children}
            </motion.div>
          </RadixPopover.Content>
        </RadixPopover.Portal>
      )}
    </AnimatePresence>
  )
}

Popover.Button = PopoverButton
Popover.Content = PopoverContent
