import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function WarningBanner() {
  return (
    <div className="w-full rounded border border-yellow-700 bg-[#241D0B]">
      <div className="flex items-start px-3 py-2 text-yellow-300">
        <div className="mt-1.5">
          <ExclamationTriangleIcon className="h-6 w-6" />
        </div>
        <div className="ml-2.5">
          <h2 className="inline-block text-xl font-semibold">
            This section is under construction
          </h2>
          <p className="mt-2 opacity-70">
            This feature will be available in the following major release. Stay
            tuned.
          </p>
        </div>
      </div>
    </div>
  )
}
