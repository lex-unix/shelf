import {
  redirect,
  type LinksFunction,
  type ActionFunction,
  type LoaderFunction
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState, useMemo, useEffect, useContext } from 'react'
import ListView from '~/components/list-view'
import Sidebar from '~/components/sidebar'
import TileView from '~/components/tile-view'
import type { BookData } from '~/types'
import booksApi from '~/utils/books.server'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { createBookSchema } from '~/utils/validations'
import SearchBar from '~/components/search-bar'
import ViewSwitchButton from '~/components/view-switch-button'
import {
  ListBulletIcon,
  PlusIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import Dialog from '~/components/dialog'
import Button from '~/components/button'
import BookForm from '~/components/book-form'
import useLocalStorage from '~/hooks/use-local-storage'
import styles from '~/styles/list-view.css'
import { KeyboardContext } from '~/states/keyboard'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const action: ActionFunction = async ({ request }) => {
  const api = booksApi(request)
  const formData = await request.formData()
  const _action = formData.get('_action')
  if (_action === 'delete') {
    const id = formData.get('id') as string
    await api.deleteBook(id)
  } else if (_action === 'create') {
    const body = createBookSchema.parse(Object.fromEntries(formData))
    await api.createBook(body)
  } else if (_action === 'edit') {
    const id = formData.get('id') as string
    const body = Object.fromEntries(formData)
    await api.editBook(id, body)
  }
  return null
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const tag = url.searchParams.get('tag')
  const api = booksApi(request)
  const res = await api.getBooks(tag)
  if (res.status === 401) {
    return redirect('/login')
  }
  const data = await res.json()

  return data.books as BookData[]
}

export default function LibraryIndexPage() {
  const books = useLoaderData<BookData[]>()
  const [view, setView] = useLocalStorage('view', 'tile')
  const [search, setSearch] = useState('')
  const [mounted, setMounted] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { setKeyboardBlocked } = useContext(KeyboardContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredBooks = useMemo(
    () =>
      books.filter(
        b =>
          b.author.toLowerCase().includes(search.toLowerCase()) ||
          b.title.toLowerCase().includes(search.toLowerCase())
      ),

    [books, search]
  )

  return mounted ? (
    <MotionConfig transition={{ duration: 0.2, ease: [0.36, 0.66, 0.04, 1] }}>
      <div className="flex pt-8">
        <Sidebar />
        <div className="flex-1 md:ml-8">
          <div className="sticky top-0 z-10 -mt-8 bg-gray-900 pt-8 pb-8">
            <div className="flex flex-col-reverse justify-between gap-4 md:h-10 md:flex-row md:items-center md:gap-8">
              <div className="flex h-10 flex-1 gap-5">
                <SearchBar
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="flex items-center justify-center rounded border border-gray-700 p-1">
                  <ViewSwitchButton
                    active={view === 'tile'}
                    onClick={() => setView('tile')}
                  >
                    <Squares2X2Icon className="h-4 w-4" />
                  </ViewSwitchButton>
                  <ViewSwitchButton
                    active={view === 'list'}
                    onClick={() => setView('list')}
                  >
                    <ListBulletIcon className="h-4 w-4" />
                  </ViewSwitchButton>
                </div>
              </div>

              <div className="h-10 md:inline-block">
                <Dialog
                  open={dialogOpen}
                  onOpenChange={open => {
                    setDialogOpen(open)
                    setKeyboardBlocked(open)
                  }}
                >
                  <Dialog.Button>
                    <Button
                      leading={<PlusIcon className="h-5 w-5" />}
                      className="h-full w-full text-center md:w-fit"
                    >
                      Add new
                    </Button>
                  </Dialog.Button>
                  <Dialog.Overlay />
                  <Dialog.Content>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Add new book</h2>
                      <Button
                        form="book-form"
                        leading={<PlusCircleIcon className="h-5 w-5" />}
                      >
                        Add book
                      </Button>
                    </div>
                    <Dialog.Separator />
                    <BookForm />
                  </Dialog.Content>
                </Dialog>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {view === 'tile' ? (
              <TileView key="tile" books={filteredBooks} />
            ) : (
              <ListView key="list" books={filteredBooks} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  ) : (
    <div />
  )
}
