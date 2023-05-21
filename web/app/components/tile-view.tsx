import type { BookData } from '~/types'
import { motion } from 'framer-motion'
import Book from './book'

interface TileViewProps {
  books: BookData[]
}

export default function TileView({ books }: TileViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-4 gap-y-10"
    >
      {books.map((book, i) => (
        <Book
          key={i}
          author={book.author}
          book={book.title}
          cover={book.cover}
        />
      ))}
    </motion.div>
  )
}
