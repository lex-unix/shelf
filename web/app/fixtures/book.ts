export type Tag = 'finished' | 'favorite' | 'wantToRead' | 'currentlyReading'

export interface Book {
  author: string
  book: string
  tag: Tag
}

export const books: Book[] = [
  {
    author: 'J.K. Rowling',
    book: "Harry Potter and the Philosopher's Stone",
    tag: 'finished'
  },
  {
    author: 'George Orwell',
    book: '1984',
    tag: 'favorite'
  },
  {
    author: 'Margaret Atwood',
    book: "The Handmaid's Tale",
    tag: 'wantToRead'
  },
  {
    author: 'Stephen King',
    book: 'The Shining',
    tag: 'currentlyReading'
  },
  {
    author: 'J.R.R. Tolkien',
    book: 'The Lord of the Rings',
    tag: 'finished'
  },
  {
    author: 'Harper Lee',
    book: 'To Kill a Mockingbird',
    tag: 'favorite'
  },
  {
    author: 'Jane Austen',
    book: 'Pride and Prejudice',
    tag: 'wantToRead'
  },
  {
    author: 'Ernest Hemingway',
    book: 'The Old Man and the Sea',
    tag: 'currentlyReading'
  },
  {
    author: 'F. Scott Fitzgerald',
    book: 'The Great Gatsby',
    tag: 'finished'
  },
  {
    author: 'Mary Shelley',
    book: 'Frankenstein',
    tag: 'favorite'
  },
  {
    author: 'Markus Zusak',
    book: 'The Book Thief',
    tag: 'wantToRead'
  },
  {
    author: 'Agatha Christie',
    book: 'Murder on the Orient Express',
    tag: 'currentlyReading'
  },
  {
    author: 'Toni Morrison',
    book: 'Beloved',
    tag: 'finished'
  },
  {
    author: 'J.D. Salinger',
    book: 'The Catcher in the Rye',
    tag: 'favorite'
  },
  {
    author: 'Gabriel Garcia Marquez',
    book: 'One Hundred Years of Solitude',
    tag: 'wantToRead'
  },
  {
    author: 'Herman Melville',
    book: 'Moby-Dick',
    tag: 'currentlyReading'
  }
]
