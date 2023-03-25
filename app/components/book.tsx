interface BookProps {
  author: string
  book: string
}

export default function Book({ author, book }: BookProps) {
  return (
    <div className="aspect-[2/3]  rounded border border-gray-700 bg-gray-800 shadow-[inset_6px_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="flex h-full justify-between px-2.5 font-medium">
        <div className="h-full w-[1px] bg-gray-700"></div>
        <div className="flex h-full flex-1 flex-col items-center px-2.5 pt-8 pb-4 text-center">
          <p className="text-lg md:text-base">{book}</p>
          <p className="mt-auto text-base text-gray-400 md:text-sm">{author}</p>
        </div>
      </div>
    </div>
  )
}
