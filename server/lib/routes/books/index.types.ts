export type CreateRoute = {
  Body: {
    author: string
    title: string
    tag: string
  }
}

export type GetBookRoute = {
  Params: {
    id: string
  }
}
