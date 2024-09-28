import './buttons.css'

function SubmitButton (InfoArea) {
    const [info, setInfo ] = useState(InfoArea.infoElement)
    const text = `${InfoArea.infoElement.value}`
    const editButton = document.querySelector('.EditButton')
    editButton.onClick === false
    return (
      <button onSubmit={useState(text)} className='SubmitButton'>Submit</button>
    )
  
}
  
function EditButton (InfoArea) {
    const [info, setInfo] = useState(InfoArea.infoElement)
    const input = <input className='InputClass'></input>
    input.value = InfoArea.infoElement.value
    const submitButton = document.querySelector('.SubmitButton')
    submitButton.onSubmit() === false
    return (
        <button onClick={useState(input)} className='EditButton'>Edit</button>
    )
}  

export default function Buttons () {
    <div className='buttons'>
      <div className='buttonFlex'>
        <EditButton></EditButton>
        <SubmitButton></SubmitButton>
      </div>
    </div>
}