import { useState } from 'react'
import './buttons.css'
import MainArea from './main-area.jsx'
import InputModules from './input-modules.jsx'
import Preview from './preview.jsx'

export default function Button() {
    const [info, setInfo] = useState('input')
    const [buttonText, setButtonText] = useState('Submit')

    function changeDisplay() {
        if (info === 'input') {
            setInfo('preview')
            setButtonText('Edit')
        } else {
            setInfo('input')
            setButtonText('Submit')
        }
    }

    return (
        <div className='mainGrid'>
            <MainArea className='mainAreaComp'>
                {info === 'input' ? <InputModules /> : <Preview />}
            </MainArea>
            <button className='buttonComp' onClick={changeDisplay}>{buttonText}</button>
        </div>
    );
}
