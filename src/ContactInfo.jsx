import './contact-info.css'

export function ContactInfo () {
    <div className='BasicInfo'>
        <div className='ContactInfo'>Contact Info</div>
        <div className='InputContainer'>
            <div className='InputTitle Name NameTitle'>Name</div>
            <input type='text' className='Name NameInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Email EmailTitle'>Email</div>
            <input type='text' className='Email EmailInput'></input>
        </div>
        <div className='InputContainer'>
            <div className='InputTitle Number NumberTitle'>Number</div>
            <input type='text' className='Number NumberInput'></input>
        </div>
    </div>
}