import {
  type ActionFunction,
  type LinksFunction,
  redirect
} from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError
} from '@remix-run/react'
import stylesheet from '~/styles/tailwind.css'
import Navbar from './components/navbar'
import { API } from './constants'
import KeyboardProvider from './states/keyboard'

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
  const { pathname } = useLocation()
  const isIndex = pathname === '/'

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content="Alexey Miin" />
        <meta name="description" content="Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:image" content="https://shelf.lexunix.me/shelf-og.png" />
        <meta property="og:title" content="Shelf" />
        <meta property="og:description" content="Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://shelf.lexunix.me/shelf-og.png" />
        <meta name="twitter:title" content="Shelf" />
        <meta name="twitter:description" content="Elevate your reading game with Shelf. Track your reading goals and progress effortlessly with Shelf. Set personalized reading goals, monitor your reading progress, and achieve literary success." />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <KeyboardProvider>
          {!isIndex && <Navbar />}
          <main
            className={`${isIndex
              ? 'px-4 md:px-0'
              : 'mx-auto max-w-5xl px-4 pb-6 md:px-6 md:pb-8'
              } `}
          >
            <Outlet />
          </main>
        </KeyboardProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error) && error.status === 404) {
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
          <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 pb-6 md:px-6 md:pb-8">
            <div className="space-y-4 text-center md:space-y-5">
              <h1 className="text-2xl font-medium md:text-3xl">
                {error.status}
              </h1>
              <p className="text-gray-400">This page could not be found.</p>
              <Link
                to="/"
                className="block font-medium hover:underline hover:underline-offset-4"
              >
                Return home
              </Link>
            </div>
          </main>
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
}
