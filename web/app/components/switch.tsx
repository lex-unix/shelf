import * as RadixSwitch from '@radix-ui/react-switch'
import { motion } from 'framer-motion'

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
      className="h-[25px] w-[42px] rounded-full border border-gray-700 outline-none focus-visible:ring focus-visible:ring-green-300"
      asChild
    >
      <motion.div
        animate={checked ? 'checked' : 'unchecked'}
        variants={{
          checked: {
            backgroundColor: 'rgb(34, 197, 94)'
          },
          unchecked: {
            backgroundColor: 'rgb(23, 23, 23)'
          }
        }}
      >
        <RadixSwitch.Thumb
          asChild
          className="block h-[21px] w-[21px] rounded-full bg-gray-100"
        >
          <motion.button
            variants={{
              checked: {
                translateX: 19
              },
              unchecked: {
                translateX: 2
              }
            }}
            type="button"
          />
        </RadixSwitch.Thumb>
      </motion.div>
    </RadixSwitch.Root>
  )
}
