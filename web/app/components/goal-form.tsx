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
    <fetcher.Form ref={formRef} method="post">
      <h2 className="mb-6 text-lg font-semibold">New reading goal</h2>
      <div className="mb-2">
        <label className="mb-1 block text-gray-400">Books</label>
        <input
          ref={inputRef}
          name="books"
          placeholder="Number"
          autoComplete="off"
          required
          pattern="^[0-9]+$"
          title="Number only"
        />
      </div>
      <div className="flex items-center justify-between pb-2 pt-4">
        <label className="text-gray-400">Custom time period</label>
        <Switch checked={checked} onCheck={() => setChecked(!checked)} />
      </div>
      <fieldset disabled={!checked} className="mb-4 disabled:opacity-40">
        <div className="mb-2">
          <label className="mb-1 block text-gray-400">Start date</label>
          <input
            type="date"
            name="startDate"
            required={checked}
            defaultValue={format(new Date(), 'yyyy-MM-dd')}
            className="disabled:cursor-not-allowed"
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 block text-gray-400">End date</label>
          <input
            type="date"
            name="endDate"
            required={checked}
            defaultValue={format(new Date(), 'yyyy-MM-dd')}
            className="disabled:cursor-not-allowed"
          />
        </div>
      </fieldset>
      <Button
        type="submit"
        disabled={fetcher.state === 'submitting'}
        className="disabled:opacity-70"
      >
        {fetcher.state === 'submitting' ? 'Adding...' : 'Add new goal'}
      </Button>
    </fetcher.Form>
  )
}
