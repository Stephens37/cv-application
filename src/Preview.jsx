import './preview.css'
import './ContactInfo.jsx'
import './EduInfo.jsx'
import './JobInfo.jsx'
import './preview.css'

function PreviewContact () {
    return (
        <div className='ContactPreview'>
            <div className='NamePreview'>{document.querySelector('.NameInput').value}</div>
            <div className='EmailPreview'>{document.querySelector('.EmailInput').value}</div>
            <div className='NumberPreview'>{document.querySelector('.NumberInput').value}</div>
        </div>
    )
}

function CreateSection(Inputs, SectionClass, PreviewArea) {
    Inputs.forEach(Input => {
        const Section = document.createElement('div')
        Section.className(`${SectionClass}`)
        Section.innerText = Input.value
        PreviewArea.appendChild(Section)
    })
}

function PreviewEdu () {
    return (
        <div className='EduPreview'>
            <div className='SchoolPreview'></div>
            <div className='DegreePreview'></div>
            <div className='YearGradPreview'></div>
        </div>
    )
}

function PreviewJob () {
    return (
        <div className='JobPreview'>
            <div className='CompanyPreview'></div>
            <div className='PositionPreview'></div>
            <div className='RespPreview'></div>
            <div className='StartDatePreview'></div>
            <div className='EndDatePreview'></div>
        </div>
    )
}

const SchoolInput = document.querySelectorAll('.SchoolInput')
const DegreeInput = document.querySelectorAll('.DegreeInput')
const YearInput = document.querySelectorAll('.YearInput')

const CompanyInput = document.querySelectorAll('.CompanyInput')
const PositionInput = document.querySelectorAll('.PositionInput')
const RespInput = document.querySelectorAll('.RespInput')

const StartTimeInput = document.querySelectorAll('.StartTimeInput')
const EndTimeInput = document.querySelectorAll('.EndTimeInput')

const InputData = [
    { Inputs: SchoolInput, SectionClass: '.SchoolPrevElement', PreviewArea: '.SchoolPreview' },
    { Inputs: DegreeInput, SectionClass: '.DegreePrevElement', PreviewArea: '.DegreePreview' },
    { Inputs: YearInput, SectionClass: '.YearPrevElement', PreviewArea: '.YearPreview' },
    { Inputs: CompanyInput, SectionClass: '.CompanyPrevElement', PreviewArea: '.CompanyPreview' },
    { Inputs: PositionInput, SectionClass: '.PositionPrevElement', PreviewArea: '.PositionPreview' },
    { Inputs: RespInput, SectionClass: '.RespPrevElement', PreviewArea: '.RespPreview' },
    { Inputs: StartTimeInput, SectionClass: '.StartTimePrevElement', PreviewArea: '.StartTimePreview' },
    { Inputs: EndTimeInput, SectionClass: '.EndTimePrevElement', PreviewArea: '.EndTimePreview' },
]

InputData.forEach(({Inputs, SectionClass, PreviewArea}) => {
    CreateSection(Inputs, SectionClass, PreviewArea)
})

export default function Preview () {
    return (
        <>
            <PreviewContact></PreviewContact>
            <PreviewEdu></PreviewEdu>
            <PreviewJob></PreviewJob>
        </>
    )
}
