import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './buttons.css'
import InputModules from './input-modules.jsx'
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

/*
    - create a 'main' area to place the input/preview modules in
    - have this area change state whenever the button is clicked
    - need to both add this to my main jsx file for css layout purposes
    as well as have it available as a DOM element for rendering it
    -+
*/

function MainAreaComp () {
    return (<div className='mainAreaComp'></div>)
}

const mainArea = document.createElement('div')
mainArea.className = '.mainArea'
const mainAreaRoot = createRoot(mainArea)
mainAreaRoot.render(<InputModules />)

function changeDisplayState () {
    const [info, setInfo] = useState(<InputModules />)
    const button = document.querySelector('.submitEditButton')
    if (info === <InputModules />) {
        gatherInputs()
        setInfo(<Preview />)
        button.innerText = 'Edit'
        mainAreaRoot.render(info)
    } else if (info === <Preview />) {
        setInfo(<InputModules />)
        button.innerText = 'Submit'
        mainAreaRoot.render(info)
    }
}

export default function Button () {
    return (<button className='submitEditButton' onClick={changeDisplayState}>Submit</button>)
}
