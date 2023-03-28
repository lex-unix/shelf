import { API } from './constants'

export async function createBook(request: Request, body: any) {
  return fetch(API + '/books', {
    method: 'post',
    headers: {
      cookie: request.headers.get('Cookie') || '',
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
