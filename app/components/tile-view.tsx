import { books } from '~/fixtures/book'
import Book from './book'

export default function TileView() {
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {books.map((book, i) => (
        <Book key={i} author={book.author} book={book.book} />
      ))}
    </div>
  )
}
