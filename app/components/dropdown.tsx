import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import {
  type ReactNode,
  useState,
  forwardRef,
  type ComponentPropsWithoutRef
} from 'react'

export default function Dropdown({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <RadixDropdown.Root open={open} onOpenChange={setOpen}>
      {children}
    </RadixDropdown.Root>
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
        className={`inline-flex items-center justify-center outline-none ${className}`}
        {...props}
      >
        {children}
      </button>
    </RadixDropdown.Trigger>
  )
})

DropdownButton.displayName = 'DropdownButton'

function DropdownMenu({ children }: { children: ReactNode }) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        align="end"
        sideOffset={12}
        className="z-10 w-[256px] rounded-lg border border-gray-700 bg-gray-900 px-2 py-1.5 outline-none"
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
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
      className="w-full rounded px-3 py-2 outline-none hover:cursor-pointer hover:bg-white/5 focus:bg-white/5"
    >
      {children}
    </RadixDropdown.Item>
  )
}

function DropdownSeparator() {
  return (
    <RadixDropdown.Separator className="my-1 h-[1px] w-full bg-gray-800"></RadixDropdown.Separator>
  )
}

Dropdown.Button = DropdownButton
Dropdown.Menu = DropdownMenu
Dropdown.MenuItem = DropdownMenuItem
Dropdown.Separator = DropdownSeparator
