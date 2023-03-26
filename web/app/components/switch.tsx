import * as RadixSwitch from '@radix-ui/react-switch'

export default function Switch({
  checked,
  onCheck
}: {
  checked: boolean
  onCheck: () => void
}) {
  return (
    <RadixSwitch.Root
      checked={checked}
      onCheckedChange={onCheck}
      className="h-[25px] w-[42px] rounded-full border border-gray-700 outline-none focus-visible:ring focus-visible:ring-green-300 data-[state=checked]:bg-green-500"
    >
      <RadixSwitch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-gray-100 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </RadixSwitch.Root>
  )
}
