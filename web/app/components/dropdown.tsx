import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import {
  type ReactNode,
  useState,
  forwardRef,
  type ComponentPropsWithoutRef,
  createContext,
  useContext
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface DropdownContextProps {
  open: boolean
}

const DropdownContext = createContext<DropdownContextProps>({ open: false })

export default function Dropdown({
  open,
  onOpenChange,
  children
}: RadixDropdown.DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open: open || isOpen }}>
      <RadixDropdown.Root
        open={open || isOpen}
        onOpenChange={onOpenChange || setIsOpen}
      >
        {children}
      </RadixDropdown.Root>
    </DropdownContext.Provider>
  )
}

const DropdownButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>(({ children, className, ...props }, ref) => {
  return (
    <RadixDropdown.Trigger asChild>
      <button
        ref={ref}
        className={`inline-flex items-center justify-center outline-none data-[state=open]:opacity-60 ${className}`}
        {...props}
      >
        {children}
      </button>
    </RadixDropdown.Trigger>
  )
})

DropdownButton.displayName = 'DropdownButton'

function DropdownMenu({
  children,
  className,
  ...props
}: RadixDropdown.DropdownMenuContentProps) {
  const { open } = useContext(DropdownContext)

  return (
    <AnimatePresence>
      {open && (
        <RadixDropdown.Portal forceMount>
          <RadixDropdown.Content asChild align="end" sideOffset={12} {...props}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                opacity: { duration: 0.15 },
                scale: { duration: 0.2 }
              }}
              className={`z-10 flex flex-col gap-2.5 rounded-lg border border-gray-700 bg-gray-900 px-2 py-1.5 outline-none ${className}`}
            >
              {children}
            </motion.div>
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      )}
    </AnimatePresence>
  )
}

function DropdownMenuItem({
  children,
  onSelect
}: {
  children: ReactNode
  onSelect?: () => void
}) {
  return (
    <RadixDropdown.Item
      onSelect={onSelect}
      className="w-full rounded px-3 py-2 text-gray-400 outline-none hover:cursor-pointer hover:bg-white/5 hover:text-gray-100 focus:bg-white/5 focus:text-gray-100"
    >
      {children}
    </RadixDropdown.Item>
  )
}

function DropdownSeparator() {
  return (
    <RadixDropdown.Separator className="-my-1 h-[1px] w-full bg-gray-800"></RadixDropdown.Separator>
  )
}

Dropdown.Button = DropdownButton
Dropdown.Menu = DropdownMenu
Dropdown.MenuItem = DropdownMenuItem
Dropdown.Separator = DropdownSeparator
