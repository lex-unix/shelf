import { useLoaderData, useSearchParams } from '@remix-run/react'
import { type ChangeEvent, useState, useMemo } from 'react'
import LibraryViewBar from '~/components/library-view-bar'
import ListView from '~/components/list-view'
import Sidebar from '~/components/sidebar'
import TileView from '~/components/tile-view'
import { books } from '~/fixtures/book'

export const loader = async () => {
  return books
}

export default function LibraryIndexPage() {
  const books = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const [view, setView] = useState<'tile' | 'list'>('tile')
  const [search, setSearch] = useState('')

  const tag = searchParams.get('tag')

  const filteredBooks = useMemo(() => {
    let filteredBooks = books.filter(
      b =>
        b.author.toLowerCase().includes(search.toLowerCase()) ||
        b.book.toLowerCase().includes(search.toLowerCase())
    )
    if (tag) {
      filteredBooks = filteredBooks.filter(b =>
        b.tag.toLowerCase().includes(tag.toLowerCase())
      )
    }

    return filteredBooks
  }, [books, search, tag])

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
