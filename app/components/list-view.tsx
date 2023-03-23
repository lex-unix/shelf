import { type Book } from '~/fixtures/book'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const vocab = {
  finished: 'Finished',
  currentlyReading: 'Reading',
  wantToRead: 'Want to read',
  favorite: 'Favorite'
}

interface ListViewProps {
  books: Book[]
}

export default function ListView({ books }: ListViewProps) {
  return (
    <ul>
      {books.map((book, i) => (
        <li
          key={i}
          className="border-b border-b-gray-700 py-5 last:border-none"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2">{book.book}</p>
              <p className="text-gray-400">{book.author}</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-white/5 py-2.5 px-4">
                {vocab[book.tag]}
              </div>
              <button>
                <EllipsisVerticalIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
