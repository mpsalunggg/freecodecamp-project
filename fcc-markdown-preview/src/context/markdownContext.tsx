import { createContext, useContext, useState, type ReactNode } from 'react'
import { marked } from 'marked'

marked.setOptions({
  breaks: true,
  gfm: true,
})

interface MarkdownContextProps {
  markdown: string
  html: string
  handleChange: (value: string) => void
}

const MarkdownContext = createContext<MarkdownContextProps | undefined>(
  undefined
)

export const MarkdownProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [markdown, setMarkdown] = useState<string>(
    `
# Hello World

## Subtitle

**Bold text**, _italic text_, and \`inline code\`.

- Item 1
- Item 2

[Link](https://google.com)

\`\`\`js
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`


> This is a blockquote.

![Alt text for image](https://res.cloudinary.com/dk0z4ums3/image/upload/v1661753020/attached_image/inilah-cara-merawat-anak-kucing-yang-tepat.jpg)
`.trim()
  )

  const handleChange = (value: string) => setMarkdown(value)

  const html: string = marked.parse(markdown) as string

  return (
    <MarkdownContext.Provider value={{ markdown, html, handleChange }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export const useMarkdown = (): MarkdownContextProps => {
  const context = useContext(MarkdownContext)
  if (!context)
    throw new Error('useMarkdown must be used within a MarkdownProvider')
  return context
}
