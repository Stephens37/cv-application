import './job-info.css'
import { useState } from 'react'

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

function JobArea ({children}) {
    return (
        <div className='jobArea'>
            {children}
        </div>
    )
}

/*
    - using the company title 
*/

export default function JobSection () {
    const [jobInfoList, setJobInfoList] = useState([])
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }
    const handleClick = () => {
        setJobInfoList([...jobInfoList, <JobInfo key={generateKey('job')} />])
    }
    return (
        <div className='jobGrid'>
            <div className='practicalExp'>Practical Experience</div>
            <button className='addPosition' onClick={handleClick}>Add Position</button>
            <div className='jobAreaGridChild'>
                <JobArea>{jobInfoList}</JobArea>
            </div>
        </div>
    )
} 