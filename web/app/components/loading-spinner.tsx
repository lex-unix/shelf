export default function LoadingSpinner() {
  return (
    <svg className="h-5 w-5 animate-snake">
      <circle
        className="animate-dash fill-none stroke-gray-800"
        cx="10"
        cy="10"
        r="8"
        strokeWidth="2"
      />
    </svg>
  )
}
