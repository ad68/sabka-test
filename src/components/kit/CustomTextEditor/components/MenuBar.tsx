'use client'
import React from 'react'
import {
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  Unlink,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
} from 'lucide-react'

const MenuBar: React.FC<{ editor: any }> = ({ editor }) => {
  if (!editor) return null

  const promptForUrl = (defaultValue = '') => {
    const raw = window.prompt('لینک خود را وارد کنید (http یا https لازم نیست):', defaultValue)
    if (raw === null) return null
    const trimmed = raw.trim()
    if (trimmed === '') return ''
    return /^(https?:\/\/)/i.test(trimmed) ? trimmed : `https://${trimmed}`
  }

  const addOrEditLink = () => {
    const attrs = editor.getAttributes('link')
    const currentHref = attrs.href || ''
    const url = promptForUrl(currentHref)
    if (url === null) return
    if (url === '') {
      editor.chain().focus().unsetLink().run()
      return
    }

    const { from, to } = editor.state.selection
    const isCollapsed = from === to

    if (isCollapsed) {
      let textLabel = url.replace(/^https?:\/\//i, '')
      if (textLabel.length > 40) textLabel = textLabel.slice(0, 37) + '...'
      editor
        .chain()
        .focus()
        .insertContent({
          type: 'text',
          text: textLabel,
          marks: [{ type: 'link', attrs: { href: url, target: '_blank', rel: 'noopener noreferrer nofollow' } }],
        })
        .run()
      return
    }

    editor.chain().focus().setLink({ href: url, target: '_blank', rel: 'noopener noreferrer nofollow' }).run()
  }

  const removeLink = () => editor.chain().focus().unsetLink().run()
  const toggleBulletList = () => editor.chain().focus().toggleBulletList().run()
  const toggleOrderedList = () => editor.chain().focus().toggleOrderedList().run()
  const setTextAlign = (align: 'left' | 'center' | 'right' | 'justify') => editor.chain().focus().setTextAlign(align).run()

  return (
    <section className='toolbarWrapper'>
      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('bold') ? 'is-active' : ''}`}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('italic') ? 'is-active' : ''}`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('underline') ? 'is-active' : ''}`}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('link') ? 'is-active' : ''}`}
        onClick={addOrEditLink}
      >
        <LinkIcon size={18} />
      </button>

      {editor.isActive('link') && (
        <button type='button' className='toolbarBtn' onClick={removeLink}>
          <Unlink size={18} />
        </button>
      )}

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
        onClick={() => setTextAlign('left')}
      >
        <AlignLeft size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
        onClick={() => setTextAlign('center')}
      >
        <AlignCenter size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
        onClick={() => setTextAlign('right')}
      >
        <AlignRight size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
        onClick={() => setTextAlign('justify')}
      >
        <AlignJustify size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
        onClick={toggleBulletList}
      >
        <List size={18} />
      </button>

      <button
        type='button'
        className={`toolbarBtn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
        onClick={toggleOrderedList}
      >
        <ListOrdered size={18} />
      </button>
      <select
        onChange={e => editor.chain().focus().setFontSize(e.target.value).run()}
        value={editor.getAttributes('textStyle').fontSize || ''}
      >
        <option value=''>اندازه پیش‌فرض</option>
        <option value='12px'>12px</option>
        <option value='14px'>14px</option>
        <option value='16px'>16px</option>
        <option value='18px'>18px</option>
        <option value='24px'>24px</option>
        <option value='32px'>32px</option>
      </select>
    </section>
  )
}

export default MenuBar
