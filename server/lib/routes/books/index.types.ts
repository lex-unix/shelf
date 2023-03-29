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

export type UpdateRoute = {
  Params: {
    id: string
  }
  Body: {
    author: string
    title: string
  }
}
