import { API } from './constants'
import { type CreatedBook } from './validations'

export async function createBook(request: Request, body: CreatedBook) {
  return fetch(API + '/books', {
    method: 'post',
    headers: {
      cookie: request.headers.get('Cookie') || '',
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
