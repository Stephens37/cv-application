import './contact-info.css'
import { useState, useRef } from 'react'

/*
    how do I separate the changing of each div value
*/


export default function ContactInfo ({inputOrPrev}) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div class='contactInfoGrid'>
            <div className='contactInfoHeader'>Contact Info</div>
            <div className='basicInfoGridChild'>
                <div className='basicInfo'>
                    <div className='contactContainer'>
                        <div className='contactTitle nameTitle'>Name</div>
                         {inputOrPrev === 'preview' ? <div className='contactDiv'>{inputValue}</div>  : <input type='text'
                className='contactInput'
                value={inputValue}
                onChange={handleInputChange}/>}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle emailTitle'>Email</div>
                        {inputOrPrev === 'preview' ? <div className='contactDiv'>{inputValue}</div> : <input type='text'
                className='contactInput'
                value={inputValue}
                onChange={handleInputChange}/>}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle numberTitle'>Number</div>
                        {inputOrPrev === 'preview' ? <div className='contactDiv'>{inputValue}</div> : <input type='text'
                className='contactInput'
                value={inputValue}
                onChange={handleInputChange}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}