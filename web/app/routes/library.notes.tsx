import { PlusIcon } from '@heroicons/react/20/solid'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { useMemo, useState } from 'react'
import Button from '~/components/button'
import Dialog from '~/components/dialog'
import NoteForm from '~/components/note-form'
import SearchBar from '~/components/search-bar'
import type { NoteData } from '~/types'
import notesApi from '~/utils/notes.server'

export const loader: LoaderFunction = async ({ request }) => {
  const api = notesApi(request)
  const res = await api.getNotes()
  const { notes } = await res.json()
  return notes
}

export const action: ActionFunction = async ({ request }) => {
  const api = notesApi(request)
  const formData = await request.formData()
  const res = await api.createNote(formData.get('title') as string)
  const { id } = await res.json()
  if (id) {
    return redirect(`/library/notes/${id}`)
  }
  return null
}

export default function NotesPage() {
  const notes = useLoaderData<NoteData[]>()
  const [search, setSearch] = useState('')

  const filteredNotes = useMemo(() => {
    return notes.filter(n =>
      n.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [notes, search])

  return (
    <div className="pt-8">
      <div className="flex h-10 items-center justify-between">
        <h2 className="hidden text-xl font-semibold md:inline-block">Notes</h2>
        <div className="flex flex-1 items-center justify-end">
          <div className="mr-5 flex-1 md:max-w-[440px]">
            <SearchBar
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Dialog>
            <Dialog.Button>
              <Button
                leading={<PlusIcon className="h-5 w-5" />}
                className="h-10"
              >
                Add new
              </Button>
            </Dialog.Button>
            <Dialog.Overlay />
            <Dialog.Content>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Add new goal</h2>
                <Button form="note-form" tabIndex={-1}>
                  Add new note
                </Button>
              </div>
              <Dialog.Separator />
              <NoteForm />
            </Dialog.Content>
          </Dialog>
        </div>
      </div>
      <ul className="mt-5 list-inside list-disc space-y-4 md:mt-8">
        {filteredNotes.map(note => (
          <li
            key={note.id}
            className="hover:underline hover:underline-offset-4"
          >
            <Link to={`/library/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
