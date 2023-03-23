import { type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { type ChangeEvent, useState, useMemo } from 'react'
import LibraryViewBar from '~/components/library-view-bar'
import ListView from '~/components/list-view'
import Sidebar from '~/components/sidebar'
import TileView from '~/components/tile-view'
import { books } from '~/fixtures/book'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const tag = url.searchParams.get('tag')
  let selecetedBooks = books
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
          b.book.toLowerCase().includes(search.toLowerCase())
      ),

    [books, search]
  )

  return (
    <div className="mt-8 flex">
      <Sidebar />
      <div className="ml-8 flex-1">
        <div className="mb-8">
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
