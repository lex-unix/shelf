import { API } from './constants'

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
