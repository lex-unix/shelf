import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactNode, useState, createContext, useContext } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

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
      <MotionConfig transition={{ opacity: { duration: 0.2 } }}>
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
              scale: 0.97,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="fixed top-[50%] left-[50%] z-30 w-[90vw] max-w-md rounded-md border border-gray-700 bg-gray-900 px-7 py-5 shadow-[0_16px_20px_hsla(0,0%,0%,20%)] outline-none"
          >
            {children}
          </motion.div>
        </RadixDialog.Content>
      )}
    </AnimatePresence>
  )
}

Dialog.Content = DialogContent
Dialog.Overlay = DialogOverlay
