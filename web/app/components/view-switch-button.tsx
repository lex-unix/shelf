import { type ComponentProps } from 'react'

type ViewSwitchButtonProps = ComponentProps<'button'> & {
  active: boolean
}

export default function ViewSwitchButton({
  active,
  onClick,
  children
}: ViewSwitchButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'bg-white/5' : 'opacity-40 hover:opacity-100'
      } inline-flex h-8 w-8 items-center justify-center rounded outline-none transition-opacity focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-gray-400`}
    >
      {children}
    </button>
  )
}
