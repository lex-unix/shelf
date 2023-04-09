import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Transition
} from 'framer-motion'
import Switch from './switch'
import { format } from 'date-fns'

const transition: Transition = {
  ease: 'easeOut',
  duration: 0.2
}

export default function GoalForm() {
  const fetcher = useFetcher()
  const [checked, setChecked] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isSubmitting = fetcher.state === 'submitting'

  useEffect(() => {
    if (fetcher.state === 'idle') {
      formRef.current?.reset()
      inputRef.current?.focus()
    }
  }, [fetcher.state])

  return (
    <MotionConfig transition={transition}>
      <fetcher.Form ref={formRef} id="goal-form" method="post">
        <fieldset
          disabled={isSubmitting}
          className="space-y-4 disabled:opacity-70"
        >
          <input type="hidden" name="_action" value="create" />
          <label className="block text-gray-300">
            Name
            <input
              ref={inputRef}
              name="name"
              placeholder="Goal name"
              autoComplete="off"
              required
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-300">
            Number of book to read
            <input
              name="total"
              placeholder="20"
              autoComplete="off"
              required
              pattern="^[0-9]+$"
              title="Number only"
              className="mt-2 block w-full"
            />
          </label>
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Custom time period</label>
            <Switch checked={checked} onCheck={() => setChecked(!checked)} />
          </div>
          <div className="overflow-hidden">
            <AnimatePresence>
              {checked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="space-y-4">
                    <label className="block text-gray-300">
                      Start date
                      <input
                        type="date"
                        name="startDate"
                        required={checked}
                        defaultValue={format(new Date(), 'yyyy-MM-dd')}
                        className="mt-2 block w-full appearance-none"
                      />
                    </label>
                    <label className="block text-gray-300">
                      End date
                      <input
                        type="date"
                        name="endDate"
                        required={checked}
                        defaultValue={format(new Date(), 'yyyy-MM-dd')}
                        className="mt-2 block w-full appearance-none"
                      />
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </fieldset>
      </fetcher.Form>
    </MotionConfig>
  )
}
