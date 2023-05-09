import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactNode, useState, createContext, useContext } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

const transition = {
  duration: 0.25,
  ease: 'easeOut'
}

type DialogContextProps = {
  open: boolean
}

const DialogContext = createContext<DialogContextProps>({ open: false })

export default function Dialog({
  children,
  open,
  onOpenChange
}: RadixDialog.DialogProps) {
  /*
    If caller doesn't pass `open` and `onOpenChange` 
    we should handle state internally
  */
  const [isOpen, setOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ open: open || isOpen }}>
      <MotionConfig transition={transition}>
        <RadixDialog.Root
          open={open || isOpen}
          onOpenChange={onOpenChange || setOpen}
        >
          {children}
        </RadixDialog.Root>
      </MotionConfig>
    </DialogContext.Provider>
  )
}

function DialogOverlay() {
  const { open } = useContext(DialogContext)

  return (
    <AnimatePresence>
      {open && (
        <RadixDialog.Overlay forceMount asChild>
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(2.5px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-20 bg-black/20"
          ></motion.div>
        </RadixDialog.Overlay>
      )}
    </AnimatePresence>
  )
}

function DialogContent({ children }: { children: ReactNode }) {
  const { open } = useContext(DialogContext)

  return (
    <AnimatePresence>
      {open && (
        <RadixDialog.Content forceMount asChild>
          <motion.div
            initial={{
              opacity: 0,
              translateX: '-50%',
              translateY: '50%'
            }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: '50%' }}
            transition={{
              ...transition,
              opacity: {
                duration: transition.duration * 0.8
              }
            }}
            className="fixed bottom-0 left-[50%] top-[10%] z-50 w-full max-w-xl outline-none md:bottom-[initial]"
          >
            <div className="h-full rounded-lg border border-transparent bg-gray-900 px-7 py-5 shadow-[0_16px_20px_hsla(0,0%,0%,20%)] md:border-gray-700">
              {children}
            </div>
          </motion.div>
        </RadixDialog.Content>
      )}
    </AnimatePresence>
  )
}

function DialogButton({ children }: { children: ReactNode }) {
  return (
    <RadixDialog.Trigger asChild className="data-[state=open]:opacity-60">
      {children}
    </RadixDialog.Trigger>
  )
}

function DialogSeparator() {
  return <div className="-mx-7 my-7 h-[1px] bg-gray-700"></div>
}

Dialog.Content = DialogContent
Dialog.Overlay = DialogOverlay
Dialog.Button = DialogButton
Dialog.Separator = DialogSeparator
