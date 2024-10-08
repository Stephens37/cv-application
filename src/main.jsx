import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './buttons.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mainArea'></div>
    <Button></Button>
  </StrictMode>,
)
