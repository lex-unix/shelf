export type RegisterRoute = {
  Body: {
    name: string
    email: string
    password: string
  }
}

export type LoginRoute = {
  Body: {
    email: string
    password: string
  }
}
