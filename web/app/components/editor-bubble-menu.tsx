import type { BubbleMenuProps } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react'
import {
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  StrikeIcon
} from './editor-icons'

type EditorBubbleMenuItem = {
  name: string
  isActive: () => boolean
  command: () => void
  icon: typeof FontBoldIcon
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, 'children'>

export default function EditorBubbleMenu(props: EditorBubbleMenuProps) {
  const menuItems: EditorBubbleMenuItem[] = [
    {
      name: 'bold',
      isActive: () => props.editor.isActive('bold'),
      command: () => props.editor.chain().focus().toggleBold().run(),
      icon: FontBoldIcon
    },
    {
      name: 'italic',
      isActive: () => props.editor.isActive('italic'),
      command: () => props.editor.chain().focus().toggleItalic().run(),
      icon: FontItalicIcon
    },
    {
      name: 'strike',
      isActive: () => props.editor.isActive('strike'),
      command: () => props.editor.chain().focus().toggleStrike().run(),
      icon: StrikeIcon
    },
    {
      name: 'heading',
      isActive: () => props.editor.isActive('heading', { level: 1 }),
      command: () => props.editor.chain().focus().toggleHeading({ level: 1 }),
      icon: HeadingIcon
    }
  ]

  const bubbleMenuProps: EditorBubbleMenuProps = {
    ...props,
    tippyOptions: {
      moveTransition: 'transform 150ms ease-out'
    }
  }

  return (
    <BubbleMenu
      {...bubbleMenuProps}
      className="z-50 flex divide-x divide-gray-700 overflow-hidden rounded border border-gray-700 bg-gray-900"
    >
      {menuItems.map(item => (
        <button
          key={item.name}
          type="button"
          onClick={item.command}
          className={`p-3 hover:bg-white/10 ${
            item.isActive() ? 'bg-white/10' : ''
          }`}
        >
          <item.icon />
        </button>
      ))}
    </BubbleMenu>
  )
}
