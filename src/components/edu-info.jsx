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

/*
    - inputOrPrev does change, but only upon the click of the Add Degree button
    - the new div addition has the changed inputOrPrev
    - there is no dynamic change of inputOrPrev in either the divs or inputs

    - how do I change the function so that inputOrPrev is dynamically set?
    - perhaps a state function...
    - but a state function will only be triggered on the button click as well

    - the changed value of inputOrPrev is reaching the EduInputs component
    - it is also reaching the returned inputs
    - the returned inputs need to be dynamically able to read inputOrPrev
    - but why would this be an issue, if the returned inputs are still
    under the umbrella of the EduSection component
    - the eduInputList created from the EduInputs is still under
    the umbrella of EduSection, but I don't think that's what matters
    
    - what I think is really happening is inputOrPrev is being returned once
    and since the value is already returned it is never changed again
    - I need to listen within the JSX element for any changes to inputOrPrev
*/

/*
    - eduInputs is taking note that inputOrPrev is switching to preview, however the changes only reflect
    after the add button clicked
    - the value of inputOrPrev stays the same, never changes
    - create state function that puts the updated state into EduInputs as a prop
*/

/*
    - create two separate components for inputs and divs
    - the input or div logic will be in the returned EduSection jsx elements
    - 
*/

export default function EduSection({ inputOrPrev }) {

    const [eduEntries, setEduEntries] = useState([])

    const handleInputChange = (index, field, value) => {
        setEduEntries((prevEntries) => {
            const updatedEntries = [...prevEntries]
            updatedEntries[index][field] = value
            return updatedEntries
        })
    }

    const handleClick = () => {
        setEduEntries([...eduEntries, { schoolValue: '', degreeValue: '', gradValue: '' }])
    }

    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
            <div className='eduAreaGridChild'>
                <EduArea>
                    {eduEntries.map((entry, index) => (
                        <EduInputs
                            key={index}
                            entry={entry}
                            index={index}
                            inputOrPrev={inputOrPrev}
                            onInputChange={handleInputChange}
                        />
                    ))}
                </EduArea>
            </div>
        </div>
    )
}

function EduInputs({ entry, index, inputOrPrev, onInputChange }) {
    return (
        <>
            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv eduText'>{entry.schoolValue}</div>
            ) : (
                <input
                    type='text'
                    className='eduInfoDiv eduInput'
                    value={entry.schoolValue}
                    onChange={(e) => onInputChange(index, 'schoolValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv eduText'>{entry.degreeValue}</div>
            ) : (
                <input
                    type='text'
                    className='eduInfoDiv eduInput'
                    value={entry.degreeValue}
                    onChange={(e) => onInputChange(index, 'degreeValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv eduText'>{entry.gradValue}</div>
            ) : (
                <input
                    type='text'
                    className='eduInfoDiv eduInput'
                    value={entry.gradValue}
                    onChange={(e) => onInputChange(index, 'gradValue', e.target.value)}
                />
            )}
        </>
    );
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