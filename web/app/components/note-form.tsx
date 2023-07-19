import { useFetcher } from '@remix-run/react'

export default function NoteForm() {
  const fetcher = useFetcher()

  return (
    <fetcher.Form method="POST" id="note-form">
      <label className="block text-gray-300">
        Note title
        <input
          name="title"
          placeholder="Note title"
          className="mt-2 block w-full"
          required
        />
      </label>
    </fetcher.Form>
  )
}
