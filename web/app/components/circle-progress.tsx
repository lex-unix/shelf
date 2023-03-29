import { CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface CircleProgressProps {
  progress: number
  currentCount: number
}

const SIZE = 48
const CENTER = SIZE / 2
const STROKE_WIDTH = 3
const RADIUS = CENTER - STROKE_WIDTH

export default function CircleProgress({
  progress,
  currentCount
}: CircleProgressProps) {
  return (
    <div className="relative mr-3">
      <svg
        width={SIZE}
        height={SIZE}
        className="-rotate-90"
        fill="none"
        strokeWidth={STROKE_WIDTH}
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="currentColor"
          className="text-gray-500"
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          animate={{ pathLength: [0, progress / 100] }}
          transition={{ duration: 0.5 }}
          strokeLinecap="round"
          className="text-green-500"
          stroke="currentColor"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {progress === 100 ? (
          <CheckIcon className="h-6 w-6 text-green-500" />
        ) : (
          <p>{currentCount} </p>
        )}
      </div>
    </div>
  )
}
