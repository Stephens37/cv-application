import './buttons.css'
import useState from 'react'
import InputModules from './inputModules.jsx'
import Preview from './preview.jsx'
import { gatherInputs } from './preview.jsx'

/*
    - group all 3 info input files into one module with an over-arching div
    - over-arching div will be set as visible by default; grid layout

    - another over-arching div will encapsulate the preview section
    - when submit button is clicked:

    *set the state of the mainArea to be the Preview section
*/

//need to also think about how I will add the inputted info to my preview elements

const mainArea = document.querySelector('.mainArea')
const [info, setInfo ] = useState(<InputModules />)
mainArea.appendChild(info)

function changeDisplayState () {
    const button = document.querySelector('.submitEditButton')
    if (info === <InputModules />) {
        gatherInputs()
        setInfo(<Preview />)
        button.innerText = 'Edit'
    } else if (info === <Preview />) {
        setInfo(<InputModules />)
        button.innerText = 'Submit'
    }
}

export default function Button () {
    return (<button className='submitEditButton' onClick={changeDisplayState}>Submit</button>)
}
