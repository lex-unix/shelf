export type CreateRoute = {
  Body: {
    name: string
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
    goal: {
      name: string
      total: number
      progress: number
    }
  }
}
