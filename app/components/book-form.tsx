import { useFetcher } from '@remix-run/react'

export default function BookForm() {
  const fetcher = useFetcher()

  return (
    <fetcher.Form replace method="post" className="flex flex-col gap-4">
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
        Book
        <input
          name="book"
          required
          placeholder="The Shining"
          className="mt-2 block"
        />
      </label>
      <label className="text-gray-400">
        Tag
        <select name="tag" required className="mt-2 block">
          <option value="currentlyReading">Currently reading</option>
          <option value="wantToRead">Want to read</option>
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
