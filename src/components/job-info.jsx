import '../styles/job-info.css'
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
        <div className='jobMainGridChild'>
            <div className='jobGrid'>
            <div className='jobExp'>Practical Experience</div>
            <button className='addPosition' onClick={handleClick}>Add Position</button>
            <div className='jobAreaGridChild'>
                <div className='jobArea'>
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
                <div className='jobInfoDiv jobText generalDiv'>{entry.companyValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.companyValue}
                    onChange={(e) => onInputChange(index, 'companyValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText generalDiv'>{entry.positionValue}</div>
            ) : (
                <input
                    type='text'
                    className='jobInfoDiv jobInput'
                    value={entry.positionValue}
                    onChange={(e) => onInputChange(index, 'positionValue', e.target.value)}
                />
            )}

            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText generalDiv'>{entry.respValue}</div>
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
                    value={entry.startMonthValue}
                    onChange={(e) => onInputChange(index, 'startMonthValue', e.target.value)}
                    >
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
                    <label htmlFor="year"></label>
                    <input type='text'
                    className='year' 
                    value={entry.startYearValue}
                    onChange={(e) => onInputChange(index, 'startYearValue', e.target.value)}
                    />
                </div>
            )}
            {inputOrPrev === 'preview' ? (
                <div className='jobInfoDiv jobText timeWorkedFlex'>
                    <div className='endMonthDiv'>{entry.endMonthValue}</div>
                    <div className='endYearDiv'>{entry.endYearValue}</div>
                </div>
            ) : (
                <div className='timeWorkedFlex'>
                    <label htmlFor='monthWorked'></label>
                    <select name='monthWorked'
                    className='month'
                    value={entry.endMonthValue}
                    onChange={(e) => onInputChange(index, 'endMonthValue', e.target.value)}>
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
                    <label htmlFor="year"></label>
                    <input type='text'
                    className='year' 
                    value={entry.endYearValue}
                    onChange={(e) => onInputChange(index, 'endYearValue', e.target.value)}
                    />
                </div>
            )}

        </>
    );
}

/*
    - i want to access the value of whichever option is currently clicked in the dropdown menu

    - access the value
    - display it in a div

    - access the 
*/