import './edu-info.css'
import { useState } from 'react'
/*
    -instead of each EduInfo component containing static html
    *create all content in the JS DOM to add each element to an array
    - this array will be parsed through in the Preview module
    - each dev element will be created with the CreateSection factory function
    - all info will lay itself out within grid containers
    by having the class of each section be within a grid-column
*/
function EduInfo () {
    return (
    <div className='eduInfo'>
        <div className='inputContainer'>
            <div className='inputTitle school schoolTitle'>School</div>
            <input type='text' className='school schoolInput eduInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle degree degreeTitle'>Degree</div>
            <input type='text' className='degree degreeInput eduInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle year yearTitle'>Year Graduated</div>
            <input type='text' className='year yearInput eduInput'></input>
        </div>
    </div>
    )
}

function EduArea ({children}) {
    return (
        <div className='eduArea'>
            {children}
        </div>
    )
}

export default function EduSection () {
    const [eduInfoList, setEduInfoList] = useState([])
    const handleClick = () => {
        console.log(eduInfoList.value)
        setEduInfoList([...eduInfoList, <EduInfo key={eduInfoList.value} />])
    }
    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
            <div className='eduAreaGridChild'>
                <EduArea>{eduInfoList}</EduArea>
            </div>
        </div>
    )
} 