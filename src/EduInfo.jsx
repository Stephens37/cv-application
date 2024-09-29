import './edu-info.css'

export default function EduInfo () {
    <div className='EduInfo'>
        <div className='InputContainer'>
            <div className='InputTitle School SchoolTitle'>School</div>
            <input type='text' className='School SchoolInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Degree DegreeTitle'>Degree</div>
            <input type='text' className='Degree DegreeInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Year YearTitle'>Year Graduated</div>
            <input type='text' className='Year YearInput'></input>
        </div>
    </div>
}