import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode
} from 'react'

interface ButtonProps {
  leading?: ReactNode
}
export default forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'> & ButtonProps
>(function Button({ leading, onClick, className, children, ...props }, ref) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`inline-flex select-none items-center justify-center rounded bg-gray-100 px-3.5 py-1.5 font-medium text-gray-900 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 ${className}`}
      {...props}
    >
      {leading && <span className="mr-0.5">{leading}</span>}
      <span>{children}</span>
    </button>
  )
})
