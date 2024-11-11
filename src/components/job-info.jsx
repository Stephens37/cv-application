import './job-info.css'
import { useState } from 'react'

function TimeWorked () {
    return (
        <div className='timeWorkedFlex'>
            <label htmlFor='monthWorked'></label>
            <select name='monthWorked' className='month'>
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
            <label htmlFor="year"></label>
            <input type='text' className='year'/>
        </div>
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
        <>
            <input type='text' className='company companyInput jobInput'></input>
            <input type='text' className='position positionInput jobInput'></input>
            <input type='text' className='responsibilities respInput jobInput'></input>
            <TimeWorked className='timeWorked startTime jobInput startTimeInput'></TimeWorked>
            <TimeWorked className='timeWorked endTime jobInput endTimeInput'></TimeWorked>
        </>
    )
}

function JobArea ({children}) {
    return (
        <div className='jobArea'>
            {children}
        </div>
    )
}

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

export default function JobSection({ inputOrPrev }) {

    const [jobEntries, setJobEntries] = useState([])

    const handleInputChange = (index, field, value) => {
        setJobEntries((prevEntries) => {
            const updatedEntries = [...prevEntries]
            updatedEntries[index][field] = value
            return updatedEntries
        })
    }

    const handleClick = () => {
        setJobEntries([...jobEntries, { companyValue: '', positionValue: '', respValue: '',
            startDateValue: '', endDateValue: ''
         }])
    }

    return (
        <div className='eduGrid'>
            <div className='eduExp'>Education</div>
            <button className='addDegree' onClick={handleClick}>Add Position</button>
            <div className='eduAreaGridChild'>
                <div className='eduArea'>
                <div className='jobInputTitle company companyTitle'>Company</div>
                <div className='jobInputTitle position positionTitle'>Position Title</div>
                <div className='jobInputTitle responsibilities respTitle'>Main Responsibilities</div>
                <div className='jobInputTitle timeWorked startTitle'>Start Date</div>
                <div className='jobInputTitle timeWorked endTitle'>End Date</div>
                    {jobEntries.map((entry, index) => (
                        <JobInputs
                            key={index}
                            entry={entry}
                            index={index}
                            inputOrPrev={inputOrPrev}
                            onInputChange={handleInputChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

/*
    <input type='text' className='company companyInput jobInput'></input>
            <input type='text' className='position positionInput jobInput'></input>
            <input type='text' className='responsibilities respInput jobInput'></input>
            <TimeWorked className='timeWorked startTime jobInput startTimeInput'></TimeWorked>
            <TimeWorked className='timeWorked endTime jobInput endTimeInput'></TimeWorked>
*/

function JobInputs({ entry, index, inputOrPrev, onInputChange }) {
    return (
        <>
            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.companyValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.schoolValue}
                    onChange={(e) => onInputChange(index, 'companyValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.positionValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.degreeValue}
                    onChange={(e) => onInputChange(index, 'positionValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.respValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.gradValue}
                    onChange={(e) => onInputChange(index, 'respValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.startDateValue}</div>
                <TimeWorked 
                    className='jobInfoDiv jobInput' 
                    value='entry.startDateValue'
                    onChange={(e) => onInputChange(index, 'respValue', e.target.value)}>{entry.startDateValue}</TimeWorked>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.stValue}
                    onChange={(e) => onInputChange(index, 'respValue', e.target.value)}
                />
            )}
            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.respValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.gradValue}
                    onChange={(e) => onInputChange(index, 'respValue', e.target.value)}
                />
            )}
        </>
    );
}