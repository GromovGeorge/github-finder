import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { App } from './app/App'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
