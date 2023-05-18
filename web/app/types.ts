export type Tag = 'finished' | 'favorite' | 'wantToRead' | 'currentlyReading'

export type BookData = {
  id: number
  author: string
  title: string
  cover: string
  tag: Tag
}

export type GoalData = {
  id: number
  name: string
  total: number
  progress: number
  startDate: string
  endDate: string
}

export type FormError = {
  field: string
  message: string
}
