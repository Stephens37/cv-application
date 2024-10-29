import './contact-info.css'
import { useState, useRef } from 'react'

/*
    i will need to acces both the div and the input values
*/


export default function ContactInfo ({inputOrPrev}) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    function InputVariable() {
        return (
            <>
                <input type='text'
                className='contactInput'
                value={inputValue}
                onChange={handleInputChange}/>
            </>
        )
    }
    
    function DivVariable() {
        return(
            <>
                <div className='contactDiv'>{inputValue}</div>
            </>
        )
    }
    return (
        <div class='contactInfoGrid'>
            <div className='contactInfoHeader'>Contact Info</div>
            <div className='basicInfoGridChild'>
                <div className='basicInfo'>
                    <div className='contactContainer'>
                        <div className='contactTitle nameTitle'>Name</div>
                         {inputOrPrev === 'preview' ? <DivVariable></DivVariable>  : <InputVariable></InputVariable>}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle emailTitle'>Email</div>
                        {inputOrPrev === 'preview' ? <DivVariable></DivVariable> : <InputVariable></InputVariable>}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle numberTitle'>Number</div>
                        {inputOrPrev === 'preview' ? <DivVariable></DivVariable> : <InputVariable></InputVariable>}
                    </div>
                </div>
            </div>
        </div>
    )
}