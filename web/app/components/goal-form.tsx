import { useFetcher } from '@remix-run/react'
import Button from './button'
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
    <fetcher.Form ref={formRef} method="post" className="space-y-4">
      <input type="hidden" name="action" value="create" />
      <label className="text-gray-400">
        Books
        <input
          ref={inputRef}
          name="total"
          placeholder="Number"
          autoComplete="off"
          required
          pattern="^[0-9]+$"
          title="Number only"
          className="mt-2 block"
        />
      </label>
      <div className="flex items-center justify-between">
        <label className="text-gray-400">Custom time period</label>
        <Switch checked={checked} onCheck={() => setChecked(!checked)} />
      </div>
      <fieldset disabled={!checked} className="space-y-4 disabled:opacity-40">
        <label className="block text-gray-400">
          Start date
          <input
            type="date"
            name="startDate"
            required={checked}
            defaultValue={format(new Date(), 'yyyy-MM-dd')}
            className="mt-2 block disabled:cursor-not-allowed"
          />
        </label>
        <label className="block text-gray-400">
          End date
          <input
            type="date"
            name="endDate"
            required={checked}
            defaultValue={format(new Date(), 'yyyy-MM-dd')}
            className="mt-2 block disabled:cursor-not-allowed"
          />
        </label>
      </fieldset>
      <div className="w-fit">
        <Button
          type="submit"
          disabled={fetcher.state === 'submitting'}
          className="disabled:opacity-70"
        >
          {fetcher.state === 'submitting' ? 'Adding...' : 'Add new goal'}
        </Button>
      </div>
    </fetcher.Form>
  )
}
