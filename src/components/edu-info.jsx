import './edu-info.css'
import { useState } from 'react'

function EduTitles () {
    return (
        <>
            <div className='eduInputTitle school schoolTitle'>School</div>
            <div className='eduInputTitle degree degreeTitle'>Degree</div>
            <div className='eduInputTitle yearTitle'>Year Graduated</div>
        </>
    )
}

function EduInfo ({eleType}) {
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
}

function EduArea ({children}) {
    return (
        <div className='eduArea'>
            {children}
        </div>
    )
}

/*
    - if I use the state functions outside of the eduInputs component,
    the value will not change until the next iteration of the component
    - this may be because the state value is not able to be set readily until
    called upon to be set in the next function because to set the state function 
*/

export default function EduSection ({inputOrPrev}) {

    function EduInputs () {
        const [schoolValue, setSchoolValue] = useState('')
    const [degreeValue, setDegreeValue] = useState('')
    const [gradValue, setGradValue] = useState('')

    const handleInputChange = (stateValue, event) => {
        stateValue(event.target.value)
    }
        return (
            <>
                <input type='text'
                className='eduInfoDiv eduInput'
                value={schoolValue}
                onChange={(event) => handleInputChange(setSchoolValue, event)}/>

                <input type='text'
                className='eduInfoDiv eduInput'
                value={degreeValue}
                onChange={(event) => handleInputChange(setDegreeValue, event)}/>

                <input type='text'
                className='eduInfoDiv eduInput'
                value={gradValue}
                onChange={(event) => handleInputChange(setGradValue, event)}/>
            </>
        )
    }

    function EduPrev () {
        return (
            <>
                <div className='eduInfoDiv eduText'>{schoolValue}</div>
                <div className='eduInfoDiv eduText'>{degreeValue}</div>
                <div className='eduInfoDiv eduText'>{gradValue}</div>
            </>
        )
    }
    const [eduInputList, setEduInputList] = useState([])
    const [eduPrevList, setEduPrevList] = useState([])

    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }
    const handleClick = () => {
        setEduInputList([...eduInputList, <EduInputs key={generateKey('eduInput')}/>])
        setEduPrevList([...eduPrevList, <EduPrev key={generateKey('eduPrev')}/>])
    }
    
    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
            <div className='eduAreaGridChild'>
                <EduArea>
                    <EduTitles></EduTitles>
                    {inputOrPrev === 'preview' ? eduPrevList : eduInputList}
                </EduArea>
            </div>
        </div>
    )
}

/*
    - shift all input values to div text
    - need to take into account there are multiple divs
    - create an array with all the divs
    - use all the current info, but simply replace the inputs in eduArea with the div logic
    from the returned components in contact-info
*/

/*
    the inputOrPrev logic is not being dynamically retrieved from the buttons.jsx module
    it is being set once when each new InfoArea component is being added through a state function to the eduInfoList
    need to find a way to dynamically add each inputOrDiv component
*/

/*
    - create two lists: one for the input elements, one for the div elements
    - if inputOrPrev = prev, {eduDivList} and vice-versa

    - how do I get the input value if the inputs and divs are in two separate components
    - grab the state functions and put those in the top level of the EduSection component
    - create the two components

    function eduDivInfo () {
        return (
            <div>{schoolInfo}</div>
        )
    }

    function eduInputInfo () {
        return (
            input value = {schoolValue}
        )
    }

    then for the return in the EduSection

    <div className='listDiv'>{inputOrPrev="preview" ? eduDivInfo : eduInputInfo }</div>
*/
