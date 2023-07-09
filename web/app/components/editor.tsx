import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorBubbleMenu from './editor-bubble-menu'
import { useDebouncedCallback } from 'use-debounce'
import { useFetcher } from '@remix-run/react'

interface EditorProps {
  initialContent?: string
}

export default function Editor({ initialContent }: EditorProps) {
  const fetcher = useFetcher()

  const debouncedSave = useDebouncedCallback(editor => {
    const json = editor.getJSON()
    console.log(json)
    fetcher.submit({ review: JSON.stringify(json) }, { method: 'POST' })
  }, 500)

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none'
      }
    },
    content: initialContent ?? undefined,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing a review',
        emptyNodeClass: 'is-editor-empty'
      })
    ],
    onUpdate: ({ editor }) => {
      debouncedSave(editor)
    }
  })

  return (
    <div>
      {editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} className="relative w-full" />
    </div>
  )
}
