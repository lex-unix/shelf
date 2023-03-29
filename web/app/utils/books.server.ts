import { API } from '~/constants'
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

export async function deleteBook(request: Request, id: string) {
  return fetch(API + `/books/${id}`, {
    method: 'DELETE',
    headers: {
      cookie: request.headers.get('Cookie') || ''
    }
  })
}
