import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl">Hello, Remix! 💿</h1>
      <Link to="/library/books" className="font-bold">
        Library
      </Link>
    </div>
  )
}
