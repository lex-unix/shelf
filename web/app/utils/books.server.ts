import { API } from '~/constants'
import { type CreatedBook } from './validations'

export default function booksApi(request: Request) {
  const cookie = request.headers.get('Cookie') || ''

  return {
    getBooks: async (tag?: string | null) => {
      const path = tag ? `/books?tag=${tag}` : '/books'
      return fetch(API + path, {
        headers: request.headers,
        credentials: 'include'
      })
    },
    createBook: async (body: CreatedBook) => {
      return fetch(API + '/books', {
        method: 'post',
        headers: {
          cookie,
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    },

    deleteBook: async (id: string) => {
      return fetch(API + `/books/${id}`, {
        method: 'DELETE',
        headers: {
          cookie
        }
      })
    },

    editBook: async (id: string, body: any) => {
      return fetch(API + `/books/${id}`, {
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
