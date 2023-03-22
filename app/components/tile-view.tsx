import { type Book as BookData } from '~/fixtures/book'
import Book from './book'

interface TileViewProps {
  books: BookData[]
}

export default function TileView({ books }: TileViewProps) {
  return (
    <div className="flex flex-wrap justify-between gap-y-10 gap-x-2">
      {books.map((book, i) => (
        <Book key={i} author={book.author} book={book.book} />
      ))}
    </div>
  )
}
