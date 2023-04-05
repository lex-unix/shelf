import { API } from '~/constants'
import { type UpdatedGoal, type CreatedGoal } from './validations'

export default function goalsApi(request: Request) {
  const cookie = request.headers.get('cookie') || ''

  return {
    createGoal: async (body: CreatedGoal) => {
      return fetch(API + '/goals', {
        method: 'post',
        headers: {
          cookie,
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
      })
    },

    deleteGoal: async (id: string) => {
      return fetch(`${API}/goals/${id}`, {
        method: 'delete',
        headers: {
          cookie
        },
        credentials: 'include'
      })
    },

    updateGoal: async (id: string, goal: UpdatedGoal) => {
      return fetch(`${API}/goals/${id}`, {
        method: 'put',
        headers: {
          cookie,
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          goal
        })
      })
    }
  }
}

export async function createGoal(request: Request, body: CreatedGoal) {
  const cookie = request.headers.get('cookie') || ''

  return fetch(API + '/goals', {
    method: 'post',
    headers: {
      cookie,
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  })
}

export async function deleteGoal(request: Request, id: string) {
  const cookie = request.headers.get('cookie') || ''

  return fetch(`${API}/goals/${id}`, {
    method: 'delete',
    headers: {
      cookie
    },
    credentials: 'include'
  })
}

export async function updateGoal(
  request: Request,
  id: string,
  goal: UpdatedGoal
) {
  const cookie = request.headers.get('cookie') || ''

  return fetch(`${API}/goals/${id}`, {
    method: 'put',
    headers: {
      cookie,
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      goal
    })
  })
}
