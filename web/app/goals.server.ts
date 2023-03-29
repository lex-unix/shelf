import { API } from './constants'
import { type CreatedGoal } from './validations'

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
