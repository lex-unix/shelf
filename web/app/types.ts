export type Tag = 'finished' | 'favorite' | 'wantToRead' | 'currentlyReading'

export type BookData = {
  author: string
  title: string
  tag: Tag
}

export type FormError = {
  field: string
  message: string
}
