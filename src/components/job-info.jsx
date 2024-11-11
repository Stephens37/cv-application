import './job-info.css'
import { useState } from 'react'

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
            startMonthValue: '', startYearValue: '', endMonthValue: '', endYearValue: ''
         }])
    }

    return (
        <div className='eduGrid'>
            <div className='eduExp'>Practical Experience</div>
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

function TimeWorked (entry, index, onInputChange) {
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
            <input type='text'
            className='year' 
            value={entry.Value}
            onChange={(e) => onInputChange(index, 'Value', e.target.value)}/>
        </div>
    )
}

function JobInputs({ entry, index, inputOrPrev, onInputChange }) {
    return (
        <>
            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.companyValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.companyValue}
                    onChange={(e) => onInputChange(index, 'companyValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.positionValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.positionValue}
                    onChange={(e) => onInputChange(index, 'positionValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText'>{entry.respValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.respValue}
                    onChange={(e) => onInputChange(index, 'respValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText timeWorkedFlex'>
                    <div className='startMonthDiv'>{entry.startMonthValue}</div>
                    <div className='startYearDiv'>{entry.startYearValue}</div>
                </div>
            ) : (
                <div className='timeWorkedFlex'>
                    <label htmlFor='monthWorked'></label>
                    <select name='monthWorked'
                    className='month'
                    value={entry.startMonthValue}>
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
                    <input type='text'
                    className='year' 
                    value={entry.startYearValue}
                    onChange={(e) => onInputChange(index, 'Value', e.target.value)}/>
                </div>
            )}
            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText timeWorkedFlex'>
                    <div className='endMonthDiv'>{entry.endMonthValue}</div>
                    <div className='endYearDIv'>{entry.endYearValue}</div>
                </div>
            ) : (
                <div className='timeWorkedFlex'>
                    <label htmlFor='monthWorked'></label>
                    <select name='monthWorked'
                    className='month'
                    value={entry.endMonthValue}>
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
                    <input type='text'
                    className='year' 
                    value={entry.startDateValue}
                    onChange={(e) => onInputChange(index, 'Value', e.target.value)}/>
                </div>
            )}

        </>
    );
}