import './contact-info.css'

export function ContactInfo () {
    <div className='basicInfo'>
        <div className='contactInfo'>Contact Info</div>
        <div className='inputContainer'>
            <div className='inputTitle name nameTitle'>Name</div>
            <input type='text' className='name nameInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle email emailTitle'>Email</div>
            <input type='text' className='email emailInput'></input>
        </div>
        <div className='inputContainer'>
            <div className='inputTitle number numberTitle'>Number</div>
            <input type='text' className='number numberInput'></input>
        </div>
    </div>
}