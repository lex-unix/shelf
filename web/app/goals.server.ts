const API = 'http://127.0.0.1:3001/api'

export async function createGoal(request: Request, total: number) {
  const cookie = request.headers.get('cookie') || ''

  return fetch(API + '/goals', {
    method: 'post',
    headers: {
      cookie,
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      total
    })
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
