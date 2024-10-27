import './preview.css'
import './contact-info.jsx'
import './edu-info.jsx'
import './job-info.jsx'
import './preview.css'
import { useState } from 'react'

function PreviewContact () {
    return (
        <div className='contactPreview'>
            <div className='namePreview'>{document.querySelector('.nameInput').value}</div>
            <div className='emailPreview'>{document.querySelector('.emailInput').value}</div>
            <div className='numberPreview'>{document.querySelector('.numberInput').value}</div>
        </div>
    )
}

function createSection(inputsArg, sectionClassArg, previewAreaArg) {
    inputsArg.forEach(input => {
        const section = document.createElement('div')
        section.className(`${sectionClassArg}`)
        section.innerText = input
        previewAreaArg.appendChild(section)
    })
}

function PreviewEdu () {
    return (
        <div className='eduPreview'>
            <div className='schoolPreview'></div>
            <div className='degreePreview'></div>
            <div className='yearGradPreview'></div>
        </div>
    )
}

function PreviewJob () {
    return (
        <div className='jobPreview'>
            <div className='companyPreview'></div>
            <div className='positionPreview'></div>
            <div className='respPreview'></div>
            <div className='startDatePreview'></div>
            <div className='endDatePreview'></div>
        </div>
    )
}

export function gatherInputs () {
    const schoolInput = document.querySelectorAll('.schoolInput')
    const degreeInput = document.querySelectorAll('.degreeInput')
    const yearInput = document.querySelectorAll('.yearInput')

    const companyInput = document.querySelectorAll('.companyInput')
    const positionInput = document.querySelectorAll('.positionInput')
    const respInput = document.querySelectorAll('.respInput')

    const startTimeInput = document.querySelectorAll('.startTimeInput')
    const endTimeInput = document.querySelectorAll('.endTimeInput')

    const inputData = [
        { inputs: schoolInput, sectionClass: '.schoolPrevElement', previewArea: '.schoolPreview' },
        { inputs: degreeInput, sectionClass: '.degreePrevElement', previewArea: '.degreePreview' },
        { inputs: yearInput, sectionClass: '.yearPrevElement', previewArea: '.yearPreview' },
        { inputs: companyInput, sectionClass: '.companyPrevElement', previewArea: '.companyPreview' },
        { inputs: positionInput, sectionClass: '.positionPrevElement', previewArea: '.positionPreview' },
        { inputs: respInput, sectionClass: '.respPrevElement', previewArea: '.respPreview' },
        { inputs: startTimeInput, sectionClass: '.startTimePrevElement', previewArea: '.startTimePreview' },
        { inputs: endTimeInput, sectionClass: '.endTimePrevElement', previewArea: '.endTimePreview' },
    ]
    inputData.forEach(({inputs, sectionClass, previewArea}) => {
        createSection(inputs, sectionClass, previewArea)
    })
}



export default function Preview () {
    return (
        <>
            <PreviewContact></PreviewContact>
            <PreviewEdu></PreviewEdu>
            <PreviewJob></PreviewJob>
        </>
    )
}

/*
    - instead of making a completely different module for the preview section, keep everything within the input-modules in place
    - use a useState function to convert the input values into a divs innerText
    const [valueState, setValueState] = useState(input)
    if ()
    setValueState(<div>{input.value}</div>)

    - trying to access the 'input' or 'preview' text which the changeDisplay function works off of will not work
    - this is because if I wanted to change each input to a div I would need to 
*/

/*
    use a prop to change how preview/input is shown
*/
