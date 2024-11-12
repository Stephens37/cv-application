import './edu-info.css'
import { useState } from 'react'
import React from 'react'

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
        <div className='eduMainGridChild'>
            <div className='eduGrid'>
                <div className='eduExp'>Education</div>
                <button className='addDegree' onClick={handleClick}>Add Degree</button>
                <div className='eduAreaGridChild'>
                    <div className='eduArea'>
                        <div className='eduTitle'>School</div>
                        <div className='eduTitle'>Degree</div>
                        <div className='eduTitle'>Year Graduated</div>
                        {eduEntries.map((entry, index) => (
                            <EduInputs
                                key={index}
                                entry={entry}
                                index={index}
                                inputOrPrev={inputOrPrev}
                                onInputChange={handleInputChange}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function EduInputs({ entry, index, inputOrPrev, onInputChange }) {
    return (
        <>
            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv generalDiv'>{entry.schoolValue}</div>
            ) : (
                <input
                    type='text'
                    className='eduInfoDiv'
                    value={entry.schoolValue}
                    onChange={(e) => onInputChange(index, 'schoolValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv generalDiv'>{entry.degreeValue}</div>
            ) : (
                <input
                    type='text'
                    className='eduInfoDiv eduInput'
                    value={entry.degreeValue}
                    onChange={(e) => onInputChange(index, 'degreeValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='eduInfoDiv eduText generalDiv'>{entry.gradValue}</div>
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