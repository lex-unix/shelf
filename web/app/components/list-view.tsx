import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { KeyboardContext } from '~/states/keyboard'
import { type BookData } from '~/types'
import EditBookDialog from './edit-book-dialog'
import ListViewItem from './list-view-item'
import NavigationList from './navigation-list'

interface ListViewProps {
  books: BookData[]
}

export default function ListView({ books }: ListViewProps) {
  const [openDialog, setDialogOpen] = useState(false)
  const { setKeyboardBlocked } = useContext(KeyboardContext)
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null)

  const handleEditBook = (book: BookData) => {
    setSelectedBook(book)
    setDialogOpen(true)
    setKeyboardBlocked(true)
  }

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
            book={book}
            index={i}
            onEdit={handleEditBook}
          />
        ))}
        {selectedBook && (
          <EditBookDialog
            open={openDialog}
            onOpen={open => {
              setDialogOpen(open)
              setKeyboardBlocked(open)
            }}
            book={selectedBook}
          />
        )}
      </NavigationList>
    </motion.ul>
  )
}
