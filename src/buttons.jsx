import './buttons.css'
import useState from 'react'
import InputModules from './inputModules.jsx'
import Preview from './preview.jsx'

/*
    - group all 3 info input files into one module with an over-arching div
    - over-arching div will be set as visible by default; grid layout

    - another over-arching div will encapsulate the preview section
    - when submit button is clicked:

    *set the state of the mainArea to be the Preview section
*/

//need to also think about how I will add the inputted info to my preview elements

const mainArea = document.querySelector('.mainArea')

export default function Button () {
    const [info, setInfo ] = useState(<InputModules />)
    const button = document.createElement('button')
    button.className = 'submitEditButton'
    button.innerText = 'Submit'

    if (button.addEventListener('click') === true && info(<Preview />)  === false) {
        setInfo(<Preview />)
        button.innerText = 'Edit'
    } else if (button.addEventListener('click') === true && info(<InputModules />)  === false) {
        setInfo(<InputModules />)
        button.innerText = 'Submit'
    }
    return button
}
