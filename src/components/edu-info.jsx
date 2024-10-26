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

function EduInfo () {
    return (
    <>
        <input type='text' className='school schoolInput eduInput'></input>
        <input type='text' className='degree degreeInput eduInput'></input>
        <input type='text' className='yearInput eduInput'></input>
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