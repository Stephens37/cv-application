import './contact-info.css'

export default function ContactInfo () {
    return (
        <div class='contactInfoGrid'>
            <div className='contactInfoHeader'>Contact Info</div>
            <div className='basicInfoGridChild'>
                <div className='basicInfo'>
                    <div className='contactContainer'>
                        <div className='contactTitle nameTitle'>Name</div>
                        <input type='text' className='contactInput nameInput'></input>
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle emailTitle'>Email</div>
                        <input type='text' className='contactInput emailInput'></input>
                    </div>
                    <div className='contactContainer'>
                        <div className='contactTitle numberTitle'>Number</div>
                        <input type='text' className='contactInput numberInput'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}