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
            <div className='EmailPreview'>{document.querySelector('.NumberInput').value}</div>
        </div>
    )
}

function CreateSection(SectionClass, InfoText, PreviewArea) {
    const Section = document.createElement('div')
    Section.className(`${SectionClass}`)
    Section.innerText = InfoText.value
    PreviewArea.appendChild(`${Section}`)
}

function PreviewEdu ()
    const Degree = document.querySelectorAll(.DegreeInfo)
    forEach(Degree) {
        CreateSection()
    }
    
*/

const EduPreview = <div className='EduPreview'></div>

function PreviewEdu () {
    return (
        <div className='EduPreview'>

        </div>
    )
}



export default function Preview () {
    return (
        <PreviewContact></PreviewContact>
    )
}
