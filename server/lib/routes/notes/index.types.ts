export type GetNoteById = {
  Params: {
    id: string
  }
}

export type CreateNote = {
  Body: {
    title: string
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
    note: {
      body: string
    }
  }
}
