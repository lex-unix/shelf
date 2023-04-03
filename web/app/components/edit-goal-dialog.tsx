import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'
import { type GoalData } from '~/types'
import Button from './button'
import Dialog from './dialog'

interface EditGoalDialogProps {
  goal: GoalData
  open: boolean
  onOpen: (open: boolean) => void
}

export default function EditGoalDialog({
  goal,
  open,
  onOpen
}: EditGoalDialogProps) {
  const fetcher = useFetcher()
  const { id, total, progress } = goal

  useEffect(() => {
    if (fetcher.submission) {
      onOpen(false)
    }
  }, [fetcher, onOpen])

  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <Dialog.Overlay />
      <Dialog.Content>
        <h2 className="mb-4 text-xl font-medium">Edit goal</h2>
        <fetcher.Form method="post" className="space-y-3">
          <input type="hidden" name="_action" value="edit" />
          <input type="hidden" name="id" value={id} />
          <label className="block text-gray-400">
            Total
            <input
              name="total"
              defaultValue={total}
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-400">
            Progress
            <input
              name="progress"
              defaultValue={progress}
              className="mt-2 block w-full"
            />
          </label>
          <div className="mx-auto">
            <Button>
              {fetcher.state === 'submitting' ? 'Editing' : 'Edit goal'}
            </Button>
          </div>
        </fetcher.Form>
      </Dialog.Content>
    </Dialog>
  )
}
