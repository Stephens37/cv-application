import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Info from './Info.jsx'
import './index.css'
import { ContactInfo } from './ContactInfo.jsx'
import EduInfo from './EduInfo.jsx'
import JobInfo from './JobInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='EditArea'>
      <ContactInfo className='ContactInfo'></ContactInfo>
      <EduInfo className='EduInfo'></EduInfo>
      <JobInfo className='JobInfo'></JobInfo>
    </div>
    <Preview></Preview>
  </StrictMode>,
)
