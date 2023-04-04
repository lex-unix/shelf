import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import Switch from './switch'
import { format } from 'date-fns'

export default function GoalForm() {
  const fetcher = useFetcher()
  const [checked, setChecked] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (fetcher.state === 'idle') {
      formRef.current?.reset()
      inputRef.current?.focus()
    }
  }, [fetcher.state])

  return (
    <fetcher.Form
      ref={formRef}
      id="goal-form"
      method="post"
      className="space-y-4"
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
        <label className="text-gray-400">Custom time period</label>
        <Switch checked={checked} onCheck={() => setChecked(!checked)} />
      </div>
      {checked && (
        <>
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
        </>
      )}
    </fetcher.Form>
  )
}
