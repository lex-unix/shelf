import Avatar from './avatar'

export default function Navbar() {
  return (
    <div className="borde-b mt-5 h-10 w-full">
      <div className="flex h-full max-w-5xl items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Shelf</h1>
        <Avatar
          src="https://ltqrjjxsacmuogzvtlja.supabase.co/storage/v1/object/public/avatar/2/avatar.webp"
          alt="Avatar"
        />
      </div>
    </div>
  )
}
