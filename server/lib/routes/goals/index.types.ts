export type CreateRoute = {
  Body: {
    name: string
  }
}

export type GetOneRoute = {
  Params: {
    id: string
  }
}

export type DeleteRoute = {
  Params: {
    id: string
  }
}
