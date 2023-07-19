import { API } from '~/constants'

export default function notesApi(request: Request) {
  const cookie = request.headers.get('cookie') || ''

  return {
    getNotes: async () => {
      return fetch(API + '/notes', {
        method: 'GET',
        headers: { cookie },
        credentials: 'include'
      })
    },

    getNoteById: async (id: string) => {
      return fetch(API + '/notes/' + id, {
        method: 'GET',
        headers: { cookie },
        credentials: 'include'
      })
    },

    createNote: async (title: string) => {
      return fetch(API + '/notes', {
        method: 'POST',
        headers: { cookie, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title
        }),
        credentials: 'include'
      })
    },

    updateNote: async (body: any, id: string) => {
      return fetch(API + `/notes/${id}`, {
        method: 'PUT',
        headers: { cookie, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          note: {
            body
          }
        }),
        credentials: 'include'
      })
    }
  }
}
