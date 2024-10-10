import './contact-info.css'

export default function ContactInfo () {
    <div className='basicInfo'>
        <div className='contactInfo'>Contact Info</div>
        <div className='inputContainer'>
            <div className='inputTitle nameTitle'>Name</div>
            <input type='text' className='contactInput nameInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle emailTitle'>Email</div>
            <input type='text' className='contactInput emailInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle numberTitle'>Number</div>
            <input type='text' className='contactInput numberInput'></input>
        </div>
    </div>
}