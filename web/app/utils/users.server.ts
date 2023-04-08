import { API } from './env.server'
import type {
  UserLogin,
  UserRegister,
  UpdatedPassword,
  UpdatedUser
} from './validations'

export default function usersApi(request?: Request) {
  const cookie = request?.headers.get('Cookie') || ''

  return {
    login: async (body: UserLogin) => {
      return fetch(API + '/users/login', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    },

    register: async (body: UserRegister) => {
      return fetch(API + '/users/register', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    },

    getMe: async () => {
      return fetch(API + '/users/me', {
        headers: {
          cookie
        }
      })
    },

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
