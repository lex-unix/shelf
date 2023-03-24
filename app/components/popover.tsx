import * as RadixPopover from '@radix-ui/react-popover'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
  type ReactNode
} from 'react'

export default function Popover({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      {children}
    </RadixPopover.Root>
  )
}

const PopoverButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>(({ children, className, ...props }, ref) => {
  return (
    <RadixPopover.Trigger asChild>
      <button
        ref={ref}
        className={`inline-flex h-full items-center justify-center gap-2.5 rounded bg-gray-100 px-3 text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 data-[state=open]:opacity-70 ${className}`}
        {...props}
      >
        {children}
      </button>
    </RadixPopover.Trigger>
  )
})
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
