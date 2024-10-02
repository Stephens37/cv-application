import './buttons.css'



function SubmitButton (infoArea) {
    const [info, setInfo ] = useState(infoArea.infoElement)
    const text = `${infoArea.infoElement.value}`
    const editButton = document.querySelector('.editButton')
    editButton.onClick() === false
    return (
      <button onSubmit={useState(text)} className='submitButton'>Submit</button>
    )
  
}
  
function EditButton (infoArea) {
    const [info, setInfo] = useState(infoArea.infoElement)
    const input = <input className='inputClass'></input>
    input.value = infoArea.infoElement.value
    const submitButton = document.querySelector('.submitButton')
    submitButton.onSubmit() === false
    return (
        <button onClick={useState(input)} className='editButton'>Edit</button>
    )
}  

export {SubmitButton, EditButton}