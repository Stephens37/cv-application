import './contact-info.css'
import { useState } from 'react'

export default function ContactInfo ({inputOrPrev}) {
    let inputVariable = <input type='text' className='contactInput'></input>
    let divVariable = <div className='contactDiv'>{inputVariable.value}</div>
    return (
        <div class='contactInfoGrid'>
            <div className='contactInfoHeader'>Contact Info</div>
            <div className='basicInfoGridChild'>
                <div className='basicInfo'>
                    <div className='contactContainer'>
                        <div className='contactTitle nameTitle'>Name</div>
                         {inputOrPrev === 'preview' ? divVariable : inputVariable}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle emailTitle'>Email</div>
                        {inputOrPrev === 'preview' ? divVariable : inputVariable}
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle numberTitle'>Number</div>
                        {inputOrPrev === 'preview' ? divVariable : inputVariable}
                    </div>
                </div>
            </div>
        </div>
    )
}