import { redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState, useMemo } from 'react'
import ListView from '~/components/list-view'
import Sidebar from '~/components/sidebar'
import TileView from '~/components/tile-view'
import type { BookData } from '~/types'
import { API } from '~/constants'
import { createBook, deleteBook } from '~/utils/books.server'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { createBookSchema } from '~/utils/validations'
import SearchBar from '~/components/search-bar'
import ViewSwitchButton from '~/components/view-switch-button'
import {
  ListBulletIcon,
  PlusIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'
import Popover from '~/components/popover'
import Button from '~/components/button'
import BookForm from '~/components/book-form'

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const _action = formData.get('_action')
  if (_action === 'delete') {
    const id = formData.get('id') as string
    await deleteBook(request, id)
  } else if (_action === 'create') {
    const body = createBookSchema.parse(Object.fromEntries(formData))
    await createBook(request, body)
  }
  return null
}

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const tag = url.searchParams.get('tag')
  const res = await fetch(API + '/books', {
    headers: request.headers,
    credentials: 'include'
  })

  if (res.status === 401) {
    return redirect('/login')
  }
  let data = await res.json()
  let selecetedBooks: BookData[] = data.books

  // should send the request to server with query param
  // filter array for now
  if (tag) {
    selecetedBooks = selecetedBooks.filter(book => book.tag === tag)
  }

  return selecetedBooks
}

export default function LibraryIndexPage() {
  const books = useLoaderData<BookData[]>()
  const [view, setView] = useState<'tile' | 'list'>('tile')
  const [search, setSearch] = useState('')

  const filteredBooks = useMemo(
    () =>
      books.filter(
        b =>
          b.author.toLowerCase().includes(search.toLowerCase()) ||
          b.title.toLowerCase().includes(search.toLowerCase())
      ),

    [books, search]
  )

  return (
    <div className="flex pt-8">
      <Sidebar />
      <div className="flex-1 md:ml-8">
        <div className="sticky top-0 -mt-8 bg-gray-900 pt-8 pb-8">
          <div className="flex h-10 items-center justify-between gap-8">
            <div className="flex h-full flex-1 gap-5">
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

            <div className="hidden h-10 md:inline-block">
              <Popover>
                <Popover.Button>
                  <Button
                    leading={<PlusIcon className="h-5 w-5" />}
                    className="h-full"
                  >
                    Add new
                  </Button>
                </Popover.Button>
                <Popover.Content>
                  <h3 className="mb-4 text-lg font-semibold">New book</h3>
                  <BookForm />
                </Popover.Content>
              </Popover>
            </div>
          </div>
        </div>

        <MotionConfig transition={{ duration: 0.2 }}>
          <AnimatePresence mode="wait" initial={false}>
            {view === 'tile' ? (
              <TileView key="tile" books={filteredBooks} />
            ) : (
              <ListView key="list" books={filteredBooks} />
            )}
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  )
}
