import { API } from '~/constants'
import { type UpdatedPassword, type UpdatedUser } from './validations'

export default function usersApi(request: Request) {
  const cookie = request.headers.get('Cookie') || ''

  return {
    update: async (body: UpdatedUser) => {
      return fetch(API + '/user', {
        method: 'put',
        headers: {
          cookie,
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    },

    password: async (body: UpdatedPassword) => {
      return fetch(API + '/user/password', {
        method: 'put',
        headers: {
          cookie,
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    }
  }
}

// use `any` for now
export async function login(body: any) {
  return fetch(API + '/users/login', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export async function register(body: any) {
  return fetch(API + '/users/register', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
