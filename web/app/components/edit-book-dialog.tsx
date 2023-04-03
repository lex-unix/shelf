import { useFetcher } from '@remix-run/react'
import type { BookData } from '~/types'
import Button from './button'
import Dialog from './dialog'

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

  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Edit book</Dialog.Title>
        <Dialog.Description>
          You can edit title or author of a book
        </Dialog.Description>
        <fetcher.Form method="post" className="space-y-4">
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
          <div className="text-center">
            <Button>
              {fetcher.state === 'submitting' ? 'Saving...' : 'Continue'}
            </Button>
          </div>
        </fetcher.Form>
      </Dialog.Content>
    </Dialog>
  )
}
