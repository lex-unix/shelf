import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { json, redirect } from '@remix-run/node'
import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction
} from '@remix-run/node'
import type { ShouldRevalidateFunction } from '@remix-run/react'
import { Link, useFetcher, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import Editor from '~/components/editor'
import NoteStatus from '~/components/note-status'
import type { NoteData } from '~/types'
import notesApi from '~/utils/notes.server'
import stylesheet from '~/styles/editor.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet }
]

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return {
    title: data.title
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const api = notesApi(request)
  const { id } = params
  if (typeof id !== 'string') {
    return new Response('Note not found', { status: 404 })
  }
  const res = await api.getNoteById(id)
  if (res.status === 404) {
    throw new Response('Note not found', { status: 404 })
  }
  if (res.status === 401) {
    return redirect('/login')
  }
  const { note } = await res.json()
  return json(note, {
    headers: {
      'Cache-Control': 'private, max-age=600'
    }
  })
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const api = notesApi(request)
  await api.updateNote(formData.get('body'), params.id as string)
  return null
}

export const shoudRevalidate: ShouldRevalidateFunction = ({
  actionResult,
  defaultShouldRevalidate
}) => {
  if ((actionResult as any)?.ok) {
    return true
  }
  return defaultShouldRevalidate
}

export default function NotePage() {
  const note = useLoaderData<NoteData>()
  const fetcher = useFetcher()
  const [status, setStatus] = useState<'saved' | 'unsaved'>('saved')

  const debouncedSave = useDebouncedCallback(editor => {
    const json = editor.getJSON()
    fetcher.submit({ body: JSON.stringify(json) }, { method: 'POST' })
    setTimeout(() => {
      setStatus('saved')
    }, 1000)
  }, 1000)

  const handleUpdate = ({ editor }: any) => {
    setStatus('unsaved')
    debouncedSave(editor)
  }

  return (
    <div className="pt-8">
      <div className="flex items-center justify-between">
        <Link
          to="/library/notes"
          className="inline-flex items-center gap-2 text-gray-400"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" />
          <span>All notes</span>
        </Link>
        <h2 className="font-medium text-gray-400">{note.title}</h2>
        <div className="flex w-[100px] items-center justify-end">
          <NoteStatus status={status} />
        </div>
      </div>
      <div className="mt-6">
        <Editor initialContent={note.body} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}
