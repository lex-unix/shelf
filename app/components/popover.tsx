import * as RadixPopover from '@radix-ui/react-popover'
import { useState, type ReactNode } from 'react'

export default function Popover({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      {children}
    </RadixPopover.Root>
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
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side="bottom"
        sideOffset={12}
        align="end"
        className="rounded-lg border border-gray-700 bg-gray-900 py-7 px-8"
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

Popover.Button = PopoverButton
Popover.Content = PopoverContent
