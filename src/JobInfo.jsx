import './job-info.css'

function TimeWorked () {
    return (
        <>
            <label htmlFor='time-worked'></label>
            <select name='time-worked' className='TimeWorked'>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
            </select>
            <input type='text' className='Year'/>
        </>
    )
}
function JobInfo () {
    return (
        <div className='JobInfo'>
            <div className='InputContainer'>
                <div className='InputTitle Company CompanyTitle'>Company</div>
                <input type='text' className='School SchoolInput'></input>
            </div>
            <div className='InputContainer'>
                <div className='InputTitle Position PositionTitle'>Position Title</div>
                <input type='text' className='Degree DegreeInput'></input>
            </div>
            <div className='InputContainer'>
                <div className='InputTitle Responsibilities RespTitle'>Main Responsibilities</div>
                <input type='text' className='Responsibilities RespInput'></input>
            </div>
            <div className='InputContainer TimeWorkedGrid'>
                <div className='StartDateGrid'>
                    <div className='InputTitle TimeWorked StartTitle'>Start Date</div>
                    <TimeWorked className='TimeWorked StartTime'></TimeWorked>
                    <div className='InputTitle TimeWorked EndTitle'>End Date</div>
                    <TimeWorked className='TimeWorked EndTime'></TimeWorked>
                </div>
            </div>
        </div>
    )
}

function JobArea () {
    return (
        <div className='JobArea'></div>
    )
}

function AddNew () {
    
    const handleClick = () => {
        document.querySelector('.JobArea').appendChild(JobInfo)
    }
    
    return (
        <>
            <button className='AddJob' onClick={handleClick}>Add Job</button>
        </>
    )
}

export default function JobSection () {
    return (
        <>
            <div className='PracticalExp'>Practical Experience</div>
            <AddNew></AddNew>
            <JobArea></JobArea>
        </>
    )
} 
