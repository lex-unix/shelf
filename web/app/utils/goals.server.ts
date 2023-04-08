import { API } from './env.server'
import { type UpdatedGoal, type CreatedGoal } from './validations'

export default function goalsApi(request: Request) {
  const cookie = request.headers.get('cookie') || ''

  return {
    getGoals: async () => {
      return fetch(API + '/goals', {
        method: 'GET',
        headers: {
          cookie
        },
        credentials: 'include'
      })
    },

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
