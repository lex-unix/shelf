interface BookProps {
  author: string
  book: string
}
export default function Book({ author, book }: BookProps) {
  return (
    <div className="aspect-[2/3] w-[150px] rounded border border-neutral-700 bg-neutral-800 shadow-[inset_6px_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="flex h-full justify-between px-2.5 font-medium">
        <div className="h-full w-[1px] bg-neutral-700"></div>
        <div className="flex h-full flex-1 flex-col items-center px-2.5 pt-8 pb-4 text-center">
          <p>{book}</p>
          <p className="mt-auto text-sm text-neutral-400">{author}</p>
        </div>
      </div>
    </div>
  )
}
