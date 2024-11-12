import '../styles/contact-info.css'
import { useState, useRef } from 'react'

/*
    how do I separate the changing of each div value
*/


export default function ContactInfo ({inputOrPrev}) {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [numberValue, setNumberValue] = useState('')
    console.log('inputOrPrev in Contact Info:', inputOrPrev)

    const handleInputChange = (stateValue, event) => {
        stateValue(event.target.value)
    }

    return (
        <div className='contactMainGridChild'>
            <div class='contactInfoGrid'>
                <div className='contactInfoHeader'>Contact Info</div>
                <div className='basicInfoGridChild'>
                    <div className='basicInfo'>
                        <div className='contactContainer'>
                            <div className='contactTitle nameTitle'>Name</div>
                            {inputOrPrev === 'preview' ? <div className='contactDiv generalDiv'>{nameValue}</div>  : <input type='text'
                                className='contactInput'
                                value={nameValue}
                                onChange={(event) => handleInputChange(setNameValue, event)}/>}
                        </div>
                        <div className='contactContainer'>
                            <div className='contactTitle emailTitle'>Email</div>
                            {inputOrPrev === 'preview' ? <div className='contactDiv generalDiv'>{emailValue}</div> : <input type='text'
                                className='contactInput'
                                value={emailValue}
                                onChange={(event) => handleInputChange(setEmailValue, event)}/>}
                        </div>
                        <div className='contactContainer'>
                            <div className='contactTitle numberTitle'>Number</div>
                            {inputOrPrev === 'preview' ? <div className='contactDiv generalDiv'>{numberValue}</div> : <input type='text'
                                className='contactInput'
                                value={numberValue}
                                onChange={(event) => handleInputChange(setNumberValue, event)}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}