export type CreateRoute = {
  Body: {
    total: number
    startDate?: string
    endDate?: string
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

export type UpdateRoute = {
  Params: {
    id: string
  }
  Body: {
    total: number
    progress: number
  }
}
