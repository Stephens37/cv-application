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

function EduTitles () {
    return (
        <>
            <div className='eduInputTitle school schoolTitle'>School</div>
            <div className='eduInputTitle degree degreeTitle'>Degree</div>
            <div className='eduInputTitle year yearTitle'>Year Graduated</div>
        </>
    )
}

function EduInfo () {
    return (
    <div className='eduInfo'>
        <input type='text' className='school schoolInput eduInput'></input>
        <input type='text' className='degree degreeInput eduInput'></input>
        <input type='text' className='year yearInput eduInput'></input>
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

/*
    function DisplayTitles () {
    const [prev, new] = useState(nodisplay)
    const displayGrid = () => {
            new(display)
        }
    }
*/

export default function EduSection () {
    const styles = {
        dontDisplayTitles: {
            display: 'none'
        }
    }
    const [eduInfoList, setEduInfoList] = useState([])
    const [titleDisplay, setTitleDisplay] = useState(<div className='noDisplay' style={styles.dontDisplayTitles}></div>)
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }
    const handleClick = () => {
        setEduInfoList([...eduInfoList, <EduInfo key={generateKey('edu')} />])
        setTitleDisplay(<EduTitles></EduTitles>)
    }
    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
            <div className='eduAreaGridChild'>
                <EduArea>
                    {titleDisplay}
                    {eduInfoList}
                </EduArea>
            </div>
        </div>
    )
} 