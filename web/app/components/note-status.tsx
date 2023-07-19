interface NoteStatusProps {
  status: 'unsaved' | 'saved'
}

export default function NoteStatus({ status }: NoteStatusProps) {
  return (
    <div
      className={`rounded-md border px-3 py-1.5 font-medium ${
        status === 'unsaved'
          ? 'border-amber-700 bg-[#28200B] text-amber-500'
          : 'border-green-700 bg-[#08220B] text-green-400'
      }`}
    >
      {status === 'unsaved' ? 'Unsaved' : 'Saved'}
    </div>
  )
}
