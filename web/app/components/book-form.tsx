import { useFetcher } from '@remix-run/react'
import { useEffect, useRef } from 'react'

export default function BookForm() {
  const fetcher = useFetcher()

  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (fetcher.state === 'idle') {
      formRef.current?.reset()
      titleRef.current?.focus()
    }
  }, [fetcher.state])

  return (
    <fetcher.Form ref={formRef} method="post" className="flex flex-col gap-4">
      <input hidden name="_action" value="create" />
      <label className="text-gray-400">
        Title
        <input
          ref={titleRef}
          name="title"
          required
          placeholder="The Shining"
          className="mt-2 block"
        />
      </label>
      <label className="text-gray-400">
        Author
        <input
          name="author"
          required
          placeholder="Stephen King"
          className="mt-2 block"
        />
      </label>
      <label className="text-gray-400">
        Tag
        <select name="tag" required className="mt-2 block">
          <option value="currentlyReading">Currently reading</option>
          <option selected value="wantToRead">
            Want to read
          </option>
          <option value="favorite">Favorite</option>
          <option value="finished">Finished</option>
        </select>
      </label>
      <button className="mt-3 h-10 w-fit rounded bg-gray-100 px-3 text-gray-900">
        Add new book
      </button>
    </fetcher.Form>
  )
}
