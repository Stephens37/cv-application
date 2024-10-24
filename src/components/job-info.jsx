import './job-info.css'

function TimeWorked () {
    return (
        <>
            <label htmlFor='time-worked'></label>
            <select name='time-worked' className='timeWorked'>
            <option value='january'>January</option>
            <option value='february'>February</option>
            <option value='march'>March</option>
            <option value='april'>April</option>
            <option value='may'>May</option>
            <option value='june'>June</option>
            <option value='july'>July</option>
            <option value='august'>August</option>
            <option value='september'>September</option>
            <option value='october'>October</option>
            <option value='november'>November</option>
            <option value='december'>December</option>
            </select>
            <input type='text' className='year'/>
        </>
    )
}
function JobInfo () {
    return (
        <div className='jobInfo'>
            <div className='inputContainer'>
                <div className='inputTitle company companyTitle'>Company</div>
                <input type='text' className='company companyInput jobInput'></input>
            </div>
            <div className='inputContainer'>
                <div className='inputTitle position positionTitle'>Position Title</div>
                <input type='text' className='position positionInput jobInput'></input>
            </div>
            <div className='inputContainer'>
                <div className='inputTitle responsibilities respTitle'>Main Responsibilities</div>
                <input type='text' className='responsibilities respInput jobInput'></input>
            </div>
            <div className='inputContainer timeWorkedGrid'>
                <div className='startDateGrid'>
                    <div className='inputTitle timeWorked startTitle'>Start Date</div>
                    <TimeWorked className='timeWorked startTime jobInput startTimeInput'></TimeWorked>
                    <div className='inputTitle timeWorked endTitle'>End Date</div>
                    <TimeWorked className='timeWorked endTime jobInput endTimeInput'></TimeWorked>
                </div>
            </div>
        </div>
    )
}

function JobArea () {
    return (
        <div className='jobArea'></div>
    )
}

function AddNew () {
    
    const handleClick = () => {
        document.querySelector('.jobArea').appendChild(JobInfo)
    }
    
    return (
        <>
            <button className='addJob' onClick={handleClick}>Add Job</button>
        </>
    )
}

export default function JobSection () {
    return (
        <div className='jobGrid'>
            <div className='practicalExp'>Practical Experience</div>
            <AddNew></AddNew>
            <div className='jobAreaGridChild'>
                <JobArea></JobArea>
            </div>
        </div>
    )
} 
