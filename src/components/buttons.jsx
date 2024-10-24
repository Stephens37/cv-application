import { useState } from 'react'
import './buttons.css'
import MainArea from './main-area.jsx'
import InputModules from './input-modules.jsx'
import Preview from './preview.jsx'

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
    - why don't I just import the main area module and add it to the main root
    - 
*/

/*
    const button / setButton = useState(submitButton) 
    function change Button () {
        if the button is changed based on its text it's too tightly coupled
        how could I change it based on another factor
        if it needs to be dependant on the state of a certain state or text in the first place,
        would that make tightly coupled code justified
    }
*/

/*
    - change the state of the main area from a form sheet to a info sheet
    - do this by clicking a button
    - button text also changes between edit and submit when each change is accomplished
*/

/*
    - if I change the state of the main area in the button function how will I be able to
    properly render the main area in my App.jsx file
    - it is not possible to export a root element to App.jsx
    - if I were to place the logic for changing the main area in the main area module
    the button wouldn't be able to access the module

    - I could try to create a separate function after the component is created, but how would I make a createRoot
    function on that component
*/

/*
    the main issue I am facing here is that I need to change  the state of the main info area while also:
    1. being able to add the mainArea as a component to my App.jsx file to ensure a proper CSS layout
    2. being able to activate a function that triggers the state change with my button
    3. 
*/



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


/*function DisplayButton () {
    const [info, setInfo] = useState(<InputModules />)
    
}

export default DisplayButton
*/

//FIGURE OUT HOW TO MAKE MAIN AREA A COMPONENT TO BE USED IN THE MAIN FILE AS WELL AS A DOM ELEMENT THAT IS RENDERABLE