export type CreateRoute = {
  Body: {
    total: number
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
