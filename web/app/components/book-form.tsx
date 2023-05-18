import { useFetcher } from '@remix-run/react'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Transition
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Switch from './switch'

const transition: Transition = {
  ease: 'easeOut',
  duration: 0.2
}

export default function BookForm() {
  const fetcher = useFetcher()
  const [show, setShow] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  const isSubmitting = fetcher.state === 'submitting'

  useEffect(() => {
    if (fetcher.state === 'idle') {
      formRef.current?.reset()
      titleRef.current?.focus()
    }
  }, [fetcher.state])

  return (
    <MotionConfig transition={transition}>
      <fetcher.Form
        ref={formRef}
        id="book-form"
        method="post"
        encType="multipart/form-data"
      >
        <fieldset
          disabled={isSubmitting}
          className="space-y-4 disabled:opacity-70"
        >
          <input hidden name="_action" defaultValue="create" />
          <label className="block text-gray-300">
            Title
            <input
              ref={titleRef}
              name="title"
              required
              placeholder="The Shining"
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-300">
            Author
            <input
              name="author"
              required
              placeholder="Stephen King"
              className="mt-2 block w-full"
            />
          </label>
          <label className="block text-gray-300">
            Tag
            <select
              name="tag"
              defaultValue="currentlyReading"
              required
              className="mt-2 block w-full"
            >
              <option value="currentlyReading">Currently reading</option>
              <option value="wantToRead">Want to read</option>
              <option value="favorite">Favorite</option>
              <option value="finished">Finished</option>
            </select>
          </label>
          <div className="flex items-center justify-between">
            <label className="text-gray-300">
              Import your personal book cover?
            </label>
            <Switch checked={show} onCheck={() => setShow(!show)} />
          </div>
          <div>
            <AnimatePresence>
              {show && (
                <motion.label
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 140 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-ful relative my-0 flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-700"
                >
                  <input
                    type="file"
                    name="cover"
                    accept="image/*"
                    className="m-0 h-[100px] w-full max-w-sm opacity-0"
                    onChange={handleFileChange}
                  />
                  <span
                    data-filename={file ? file.name : 'Upload book cover'}
                    className="absolute inset-0 after:absolute after:inset-0 after:flex after:items-center after:justify-center after:content-[attr(data-filename)]"
                  ></span>
                </motion.label>
              )}
            </AnimatePresence>
          </div>
        </fieldset>
      </fetcher.Form>
    </MotionConfig>
  )
}
