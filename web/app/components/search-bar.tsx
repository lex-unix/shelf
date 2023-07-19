import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useContext, type ComponentProps } from 'react'
import { KeyboardContext } from '~/states/keyboard'

type SearchBarProps = ComponentProps<'input'>

export default function SearchBar({
  value,
  className,
  onChange
}: SearchBarProps) {
  const { setKeyboardBlocked } = useContext(KeyboardContext)
  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
      <input
        value={value}
        placeholder="Search"
        onChange={onChange}
        className={`w-full rounded border border-gray-700 bg-[#1C1C1C] pl-9 pr-2.5 outline-none placeholder:text-gray-400 focus:border-gray-500 ${className}`}
        onFocus={() => setKeyboardBlocked(true)}
        onBlur={() => setKeyboardBlocked(false)}
      />
    </div>
  )
}
