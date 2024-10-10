import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './buttons.jsx'
import { MainArea } from './buttons.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mainGrid'>
      <MainArea className='mainAreaComp'></MainArea>
      <Button className='buttonComp'></Button>
    </div>
  </StrictMode>
)
