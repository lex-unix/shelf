import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'
import { type GoalData } from '~/types'
import Button from './button'
import Dialog from './dialog'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

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
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Edit this goal</h2>
          <Button
            tabIndex={-1}
            form="edit-goal-form"
            leading={<ArrowPathIcon className="h-5 w-5" />}
          >
            Edit goal
          </Button>
        </div>
        <Dialog.Separator />
        <fetcher.Form id="edit-goal-form" method="post" className="space-y-3">
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
        </fetcher.Form>
      </Dialog.Content>
    </Dialog>
  )
}
