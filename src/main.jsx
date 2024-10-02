import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Info from './Info.jsx'
import './index.css'
import { ContactInfo } from './contact-info.jsx'
import EduInfo from './edu-info.jsx'
import JobInfo from './job-info.jsx'
import { SubmitButton, EditButton } from './buttons.jsx'
/*
  if(!preview.onclick || edit.onclick ) {
    createRoot(doc.render) (
      contactinfo
      eduinfo
      jobinfo
    )
  } else if(preview.onclick) {
   createRoot(doc.render)(
   preview)}
*/
function Root
if (SubmitButton.onclick() === true) {

}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='editArea'>
      <ContactInfo className='contactInfo'></ContactInfo>
      <EduInfo className='eduInfo'></EduInfo>
      <JobInfo className='jobInfo'></JobInfo>
    </div>
    <Preview></Preview>
  </StrictMode>,
)
