'use client'
import React, { useEffect, useState } from 'react'
import './styles/style.css'
import { useEditor, EditorContent } from '@tiptap/react'
import MenuBar from './components/MenuBar'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Color from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import { Extension } from '@tiptap/core'

const FontSize = Extension.create({
  name: 'fontSize',
  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: el => el.style.fontSize || null,
            renderHTML: attrs => attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {},
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
          ({ chain }) =>
            chain().setMark('textStyle', { fontSize }).run(),
    }
  },
})

function CustomTextEditor({ onChange, value = '', error }: any) {
  const [charCount, setCharCount] = useState(0)

  const editor = useEditor({
    extensions: [
      TextStyle,
      FontSize,
      Color,
      Bold,
      Italic,
      Underline,
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: { rel: 'noopener noreferrer nofollow', target: '_blank' },
      }),
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      StarterKit.configure({ bulletList: false, orderedList: false, listItem: false }),
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const textContent = editor.getText().trim()
      setCharCount(textContent.length)
      onChange(textContent ? editor.getHTML() : '')
    },
    immediatelyRender: false, // برای رفع SSR hydration mismatch
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false })
    }
  }, [value, editor])

  return (
    <section
      className='editor-wrapper'
      style={{ borderColor: error ? '#E14856' : '#e2e2e2' }}
    >
      {editor && <MenuBar editor={editor} />}
      <EditorContent className='editor-content' editor={editor} />
      <div className='char-count'>تعداد کاراکترها: {charCount}</div>
    </section>
  )
}

export default CustomTextEditor
