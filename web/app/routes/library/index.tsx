import { type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { type ChangeEvent, useState, useMemo } from 'react'
import LibraryViewBar from '~/components/library-view-bar'
import ListView from '~/components/list-view'
import Sidebar from '~/components/sidebar'
import TileView from '~/components/tile-view'
import type { BookData } from '~/types'

const API = 'http://127.0.0.1:3001/api/books'

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const newBook = Object.fromEntries(formData)
  return newBook
}

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const tag = url.searchParams.get('tag')
  const res = await fetch(API, {
    headers: request.headers,
    credentials: 'include'
  })
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
  const books = useLoaderData<typeof loader>()
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
          <LibraryViewBar
            currentView={view}
            search={search}
            toggleListView={() => setView('list')}
            toggleTileView={() => setView('tile')}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {view === 'tile' ? (
          <TileView books={filteredBooks} />
        ) : (
          <ListView books={filteredBooks} />
        )}
      </div>
    </div>
  )
}
