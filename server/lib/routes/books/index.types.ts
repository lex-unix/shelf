export type CreateRoute = {
  Body: {
    author: string
    title: string
  }
}

export type GetBookRoute = {
  Params: {
    id: string
  }
}
