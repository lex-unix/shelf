import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import useKeypress from '~/hooks/use-keypress'
import type { BookData } from '~/types'
import ListViewItem from './list-view-item'

interface ListViewProps {
  books: BookData[]
}

export default function ListView({ books }: ListViewProps) {
  const [selected, setSelected] = useState<number>()
  const initialKeypress = useRef(false)
  const [keyboardBlocked, setKeyboardBlocked] = useState(false)

  useKeypress(['ArrowDown', 'ArrowUp'], e => {
    if (keyboardBlocked) return

    if (!initialKeypress.current) {
      initialKeypress.current = true
      setSelected(0)
      return
    }

    if (e.key === 'ArrowUp' && selected! > 0) {
      setSelected(selected! - 1)
    } else if (e.key === 'ArrowDown' && selected! < books.length - 1) {
      setSelected(selected! + 1)
    }
  })

  const handleKeyboardBlock = (blocked: boolean) => {
    setKeyboardBlocked(blocked)
  }

  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
    >
      {books.map((book, i) => (
        <ListViewItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          tag={book.tag}
          selected={selected === i}
          onKeyboardBlock={handleKeyboardBlock}
        />
      ))}
    </motion.ul>
  )
}
