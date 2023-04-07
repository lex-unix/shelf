import {
  type ActionFunction,
  type LinksFunction,
  type MetaFunction,
  redirect
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import stylesheet from '~/styles/tailwind.css'
import Navbar from './components/navbar'
import { API } from './constants'
import KeyboardObserver from './states/keyboard'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet }
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Shelf',
  viewport: 'width=device-width,initial-scale=1'
})

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const _action = formData.get('_action')
  if (_action === 'logout') {
    await fetch(API + '/users/logout', {
      method: 'post',
      headers: {
        cookie: request.headers.get('Cookie') || ''
      }
    })

    return redirect('login')
  }
  return null
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <KeyboardObserver>
          <Navbar />
          <main className="mx-auto max-w-5xl px-4 md:px-6">
            <Outlet />
          </main>
        </KeyboardObserver>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
