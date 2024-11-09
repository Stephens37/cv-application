import './edu-info.css'
import { useState } from 'react'
import React from 'react'

function EduTitles () {
    return (
        <>
            <div className='eduInputTitle school schoolTitle'>School</div>
            <div className='eduInputTitle degree degreeTitle'>Degree</div>
            <div className='eduInputTitle yearTitle'>Year Graduated</div>
        </>
    )
}

/*function EduInfo ({eleType}) {
    const [schoolValue, setSchoolValue] = useState('')
    const [degreeValue, setDegreeValue] = useState('')
    const [gradValue, setGradValue] = useState('')

    const handleInputChange = (stateValue, event) => {
        stateValue(event.target.value)
    }
    return (
    <>
        {eleType === 'preview' ? <div className='eduInfoDiv eduText'>{schoolValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={schoolValue}
                onChange={(event) => handleInputChange(setSchoolValue, event)}/>}
        {eleType === 'preview' ? <div className='eduInfoDiv eduText'>{degreeValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={degreeValue}
                onChange={(event) => handleInputChange(setDegreeValue, event)}/>}
        {eleType === 'preview' ? <div className='eduInfoDiv eduText'>{gradValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={gradValue}
                onChange={(event) => handleInputChange(setGradValue, event)}/>}
    </>
    )
}*/

function EduArea ({children}) {
    return (
        <div className='eduArea'>
            {children}
        </div>
    )
}

/*
    const [displayCat, setDisplayCat] = useState('input')
    if(inputOrPrev === 'preview') {
    setDisplayCat('preview')
    } else {
        setDisplayCat('input')
    }


*/

export default function EduSection ({inputOrPrev}) {
    // EduInputs not receiving inputOrPrev as it's not being passed as a prop
    // how to pass props from an outer function into an inner function
    console.log('inputOrPrev in EduSection:', inputOrPrev)
    const [displayCat, setDisplayCat] = useState('input')
    //setDisplayCat(inputOrPrev)
    //perhaps updating the state of inputOrPre
    function EduInputs() {
        console.log('inputOrPrev in EduInputs:', inputOrPrev)
        const [schoolValue, setSchoolValue] = useState('')
        const [degreeValue, setDegreeValue] = useState('')
        const [gradValue, setGradValue] = useState('')

        const handleInputChange = (stateValue, event) => {
            stateValue(event.target.value)
        }
        console.log('bye')
        
        return (
            <>
                {displayCat === 'preview' ? <div className='eduInfoDiv eduText'>{schoolValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={schoolValue}
                onChange={(event) => handleInputChange(setSchoolValue, event)}/>}

                {displayCat === 'preview' ? <div className='eduInfoDiv eduText'>{degreeValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={degreeValue}
                onChange={(event) => handleInputChange(setDegreeValue, event)}/>}

                {displayCat === 'preview' ? <div className='eduInfoDiv eduText'>{gradValue}</div>  : <input type='text'
                className='eduInfoDiv eduInput'
                value={gradValue}
                onChange={(event) => handleInputChange(setGradValue, event)}/>}
            </>
        )
    }
    const [eduInputList, setEduInputList] = useState([])
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }
    const handleClick = () => {
        setEduInputList([...eduInputList, <EduInputs key={generateKey('eduInput')}/>])
    }
    
    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
            <div className='eduAreaGridChild'>
                <EduArea>
                    <EduTitles></EduTitles>
                    {eduInputList}
                </EduArea>
            </div>
        </div>
    )
}

/*
    first method:
    - add three separate state methods for school, degree, and grad
    - put two separate components in the main EduSection component
    - one for inputs, the other for preview divs
    
    - the input component contains a function that handles the change of the input value
    - this is used in the onChange property of the input divs

    - each input also shares the same eduInfoDiv class as the succeeding preview divs to allow for similar grid placements

    - each input's value is the first value in its respective useState array

    
    - the preview divs are simply a div with the aforementioned eduInfoDiv class
    - the value in-between the div tags is the first value in its respective useState array


    - upon clicking the button to add new school info, each set of info is added to two lists: one for the inputs, and one for the preview divs
    - these are also given a key however it is the same key for each iteration and this should be looked at if continuing with this method

    - the returned html code includes logic which chooses the type of list to be displayed depending on the value of inputOrPrev

    Issues:
    - the state logic having to be in the top level of EduSection to accomodate both components
    - this is creating an issue in which the state is only updating on every new button click
    - it is updating with the previous state
    - the previous state is only updating once, so whichever letter was last typed appears in the next state
    
    - the inputs are changing to divs however, which goes to show that the latter part of the logic is working

    - i currently need to have the state logic in the top section of EduSection or else my preview divs will not be able to access the values
*/