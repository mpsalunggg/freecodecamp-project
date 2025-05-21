import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MarkdownProvider } from './context/markdownContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MarkdownProvider>
      <App />
    </MarkdownProvider>
  </StrictMode>
)
