import './input-modules.css'
import ContactInfo from './contact-info.jsx'
import EduSection from './edu-info.jsx'
import JobSection from './job-info.jsx'

export default function InputModules () {
    return (
        <div className='inputModules'>
            <div className='inputTitle'>Resume</div>
            <div className='inputDescription'>Fill out this form and click submit when you're ready to send it.</div>
            <ContactInfo className='contactInfoComp' />
            <EduSection className='eduSectionComp' />
            <JobSection className='jobSectionComp' />
        </div>
    )
}