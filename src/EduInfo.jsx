import './edu-info.css'
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
        <div className='EduInfo'>
        <div className='InputContainer'>
            <div className='InputTitle School SchoolTitle'>School</div>
            <input type='text' className='School SchoolInput EduInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Degree DegreeTitle'>Degree</div>
            <input type='text' className='Degree DegreeInput EduInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Year YearTitle'>Year Graduated</div>
            <input type='text' className='Year YearInput EduInput'></input>
        </div>
    </div>
    )
}

function EduArea () {
    return (
        <div className='EduArea'></div>
    )
}

function AddNew () {
    
    const handleClick = () => {
        document.querySelector('.EduArea').appendChild(EduInfo)
    }
    
    return (
        <>
            <button className='AddDegree' onClick={handleClick}>Add Degree</button>
        </>
    )
}

export default function EduSection () {
    return (
        <>
            <div className='PracticalExp'>Practical Experience</div>
            <AddNew></AddNew>
            <EduArea></EduArea>
        </>
    )
} 