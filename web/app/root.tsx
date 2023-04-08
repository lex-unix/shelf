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
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'icon', href: '/favicons/favicon.ico' },
  { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png'
  }
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  author: 'Alexey Miin',
  title: 'Shelf',
  description:
    'Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success.',
  viewport: 'width=device-width,initial-scale=1',
  'og:image': 'https://shelf.lexunix.me/shelf-og.png',
  'og:title': 'Shelf',
  'og:description':
    'Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success.',
  'twitter:card': 'summary_large_image',
  'twitter:image': 'https://shelf.lexunix.me/shelf-og.png',
  'twitter:title': 'Shelf',
  'twitter:description':
    'Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success.'
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
      <body
        style={{
          WebkitTapHighlightColor: 'transparent'
        }}
      >
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
