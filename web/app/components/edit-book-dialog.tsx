import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'
import type { BookData } from '~/types'
import Button from './button'
import Dialog from './dialog'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

interface EditBookDialogProps {
  book: BookData
  open: boolean
  onOpen: (open: boolean) => void
}

export default function EditBookDialog({
  book,
  open,
  onOpen
}: EditBookDialogProps) {
  const fetcher = useFetcher()
  const { id, title, author } = book

  useEffect(() => {
    if (fetcher.submission) {
      onOpen(false)
    }
  }, [fetcher, onOpen])

  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <Dialog.Overlay />
      <Dialog.Content>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Edit this book</h2>
          <Button
            form="edit-book-form"
            leading={<ArrowPathIcon className="h-5 w-5" />}
            tabIndex={-1}
          >
            Edit book
          </Button>
        </div>
        <Dialog.Separator />
        <fetcher.Form
          id="edit-book-form"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input type="hidden" name="_action" value="edit" />
          <input type="hidden" name="id" value={id} />
          <label className="block text-gray-300">
            Title
            <input
              name="title"
              defaultValue={title}
              placeholder="Title"
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-300">
            Author
            <input
              name="author"
              defaultValue={author}
              placeholder="Author"
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-300">
            Tag
            <select
              name="tag"
              defaultValue={book.tag}
              required
              className="mt-2 block w-full"
            >
              <option value="currentlyReading">Currently reading</option>
              <option value="wantToRead">Want to read</option>
              <option value="favorite">Favorite</option>
              <option value="finished">Finished</option>
            </select>
          </label>
        </fetcher.Form>
      </Dialog.Content>
    </Dialog>
  )
}
