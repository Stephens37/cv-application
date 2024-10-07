import ContactInfo from './contact-info.jsx'
import EduSection from './edu-info.jsx'
import JobSection from './job-info.jsx'

export function InputModules () {
    return (
        <div className='inputModules'>
            <ContactInfo />
            <EduSection />
            <JobSection />
        </div>
    )
}