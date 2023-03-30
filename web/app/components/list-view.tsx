import { motion } from 'framer-motion'
import type { BookData } from '~/types'
import ListViewItem from './list-view-item'
import NavigationList from './navigation-list'

interface ListViewProps {
  books: BookData[]
}

export default function ListView({ books }: ListViewProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
    >
      <NavigationList listLen={books.length}>
        {books.map((book, i) => (
          <ListViewItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            tag={book.tag}
            index={i}
          />
        ))}
      </NavigationList>
    </motion.ul>
  )
}
