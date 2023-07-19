import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorBubbleMenu from './editor-bubble-menu'

interface EditorProps {
  initialContent?: Object
  onUpdate: (editor: any) => void
}

export default function Editor({ initialContent, onUpdate }: EditorProps) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none'
      }
    },
    content: initialContent,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing a review',
        emptyNodeClass: 'is-editor-empty'
      })
    ],
    onUpdate
  })

  return (
    <div>
      {editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} className="relative w-full" />
    </div>
  )
}
