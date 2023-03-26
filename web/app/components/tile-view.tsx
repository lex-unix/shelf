import { type Book as BookData } from '~/fixtures/book'
import Book from './book'

interface TileViewProps {
  books: BookData[]
}

export default function TileView({ books }: TileViewProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-y-10 gap-x-4">
      {books.map((book, i) => (
        <Book key={i} author={book.author} book={book.book} />
      ))}
    </div>
  )
}
