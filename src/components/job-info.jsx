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

function JobTitles () {
    return (
        <>
            <div className='jobInputTitle company companyTitle'>Company</div>
            <div className='jobInputTitle position positionTitle'>Position Title</div>
            <div className='jobInputTitle responsibilities respTitle'>Main Responsibilities</div>
            <div className='jobInputTitle timeWorked startTitle'>Start Date</div>
            <div className='jobInputTitle timeWorked endTitle'>End Date</div>
        </>
    )
}

function JobInfo () {
    return (
        <div className='jobInfo'>
            <input type='text' className='company companyInput jobInput'></input>
            <input type='text' className='position positionInput jobInput'></input>
            <input type='text' className='responsibilities respInput jobInput'></input>
            <TimeWorked className='timeWorked startTime jobInput startTimeInput'></TimeWorked>
            <TimeWorked className='timeWorked endTime jobInput endTimeInput'></TimeWorked>
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
    const styles = {
        dontDisplayTitles: {
            display: 'none'
        }
    }
    const [jobInfoList, setJobInfoList] = useState([])
    const [titleDisplay, setTitleDisplay] = useState(<div className='noDisplay' style={styles.dontDisplayTitles}></div>)
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }
    const handleClick = () => {
        setJobInfoList([...jobInfoList, <JobInfo key={generateKey('job')} />])
        setTitleDisplay(<JobTitles></JobTitles>)
    }
    return (
        <div className='jobGrid'>
            <div className='practicalExp'>Practical Experience</div>
            <button className='addPosition' onClick={handleClick}>Add Position</button>
            <div className='jobAreaGridChild'>
                <JobArea>
                    {titleDisplay}
                    {jobInfoList}
                </JobArea>
            </div>
        </div>
    )
} 