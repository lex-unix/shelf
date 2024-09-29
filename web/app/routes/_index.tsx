import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Shelf' }
  ]
}

export default function Index() {
  return (
    <section className="flex min-h-screen flex-col overflow-hidden md:flex-row">
      <div className="flex items-center pl-0 md:w-1/2 md:pl-12 lg:pl-20">
        <div className="pt-12 md:pt-0">
          <h1 className="mb-8 text-5xl font-semibold md:text-6xl">
            Track your <br />
            <span className="bg-gradient-to-r from-[#00EC97] to-[#00A3FF] bg-clip-text text-transparent">
              reading goals
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            Shelf is the perfect tool to help you stay organized and focused on
            your reading goals. Shelf makes it easy to track your progress and
            stay on top of your reading list. Join now!
          </p>
          <div className="mt-8 flex items-center gap-4 md:mt-16">
            <Link
              to="/register"
              className="rounded-full bg-gray-100 px-7 py-2 font-semibold text-gray-900 md:text-lg"
            >
              Join now
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-gray-100 px-7 py-2 font-semibold text-gray-100 md:text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden pt-10 md:ml-16 md:pt-20">
        <div className="absolute -right-32 select-none">
          <img
            src="/app.png"
            alt="Screenshot of the app"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
