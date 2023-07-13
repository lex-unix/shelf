export type GetNoteById = {
  Params: {
    id: string
  }
}

export type CreateNote = {
  Body: {
    body: string
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
