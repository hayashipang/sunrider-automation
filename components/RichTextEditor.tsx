'use client'

import { useState, useRef, useEffect } from 'react'
import { Bold, Italic, Underline, List, Link, Image, Save } from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "輸入內容...",
  className = ""
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current) {
      if (value) {
        editorRef.current.innerHTML = value
      } else {
        editorRef.current.innerHTML = `<div class="text-gray-500 pointer-events-none">${placeholder}</div>`
      }
    }
  }, [value, placeholder])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleInput()
  }

  const insertLink = () => {
    const url = prompt('請輸入連結網址:')
    if (url) {
      execCommand('createLink', url)
    }
  }

  const insertImage = () => {
    const url = prompt('請輸入圖片網址:')
    if (url) {
      execCommand('insertImage', url)
    }
  }

  const toolbarButtons = [
    { icon: Bold, command: 'bold', title: '粗體' },
    { icon: Italic, command: 'italic', title: '斜體' },
    { icon: Underline, command: 'underline', title: '底線' },
    { icon: List, command: 'insertUnorderedList', title: '項目符號' },
    { icon: Link, action: insertLink, title: '插入連結' },
    { icon: Image, action: insertImage, title: '插入圖片' },
  ]

  return (
    <div className={`border border-dark-600 rounded-lg overflow-hidden ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center space-x-1 p-2 bg-dark-700 border-b border-dark-600">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => button.action ? button.action() : execCommand(button.command)}
            className="p-2 text-gray-400 hover:text-white hover:bg-dark-600 rounded transition-colors"
            title={button.title}
          >
            <button.icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`min-h-[200px] p-4 bg-dark-800 text-white focus:outline-none ${
          isFocused ? 'ring-2 ring-primary-500' : ''
        }`}
        style={{ minHeight: '200px' }}
      />
    </div>
  )
}
