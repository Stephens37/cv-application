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

function EduArea () {
    return (
        <div className='eduArea'></div>
    )
}

function AddNew () {
    
    const handleClick = () => {
        document.querySelector('.eduArea').appendChild(EduInfo)
    }
    
    return (
        <>
            <button className='addDegree' onClick={handleClick}>Add Degree</button>
        </>
    )
}

export default function EduSection () {
    return (
        <>
            <div className='practicalExp'>Practical Experience</div>
            <AddNew></AddNew>
            <EduArea></EduArea>
        </>
    )
} 