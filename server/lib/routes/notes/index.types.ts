export type GetNoteById = {
  Params: {
    id: string
  }
}

export type CreateNote = {
  Body: {
    body: string
    bookId: number
  }
}

export type DeleteNote = {
  Params: {
    id: string
  }
}

export type UpdateNote = {
  Params: {
    id: string
  }
  Body: {
    body: string
  }
}
