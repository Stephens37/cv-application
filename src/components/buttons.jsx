import { useState } from 'react'
import './buttons.css'
import MainArea from './main-area.jsx'
import ContactInfo from './contact-info.jsx'
import EduSection from './edu-info.jsx'
import JobSection from './job-info.jsx'

export default function Button() {
    const [info, setInfo] = useState('input')
    const [buttonText, setButtonText] = useState('Submit')

    function changeDisplay() {
        if (info === 'input') {
            setInfo('preview')
            setButtonText('Edit')
            console.log('hi')
        } else {
            setInfo('input')
            setButtonText('Submit')
        }
    }

    return (
        <div className='mainGrid'>
            <div className='mainTitle'>Resume</div>
            <div className='mainDescription'>Fill out this form and click submit when you're ready to send it.</div>
            <ContactInfo inputOrPrev={info}></ContactInfo>
            <EduSection inputOrPrev={info}></EduSection>
            <JobSection inputOrPrev={info}></JobSection>
            <button className='buttonComp' onClick={changeDisplay}>{buttonText}</button>
        </div>
    );
}
