import './App.css'

/*function InputTitle (props) {
  const inputTitleClass = 'inputTitleClass'
  const inputTitleStyle = {
    className: `${inputTitleClass} ${props.text.toLowerCase()}`,
  }

  return (
    <>
      <div style={inputTitleStyle}>{props.text}</div>
    </>
  )
}*/

/*
  - create separate props for both the input and div with text
  - set the default infoArea prop to be the input
  - include the div prop as well in the arguments
*/

/* function InfoArea (props) {
  divProp = <div className='submittedName'>{inputProp.value}</div>
  inputProp = <input className='inputClass'></input>
  return (
    <div className='infoArea'>{infoSpace}</div>
  ) 
} */

const InfoArea = ({ infoElement }) => {
  return (
    <div className='InfoArea'>
      {infoElement}
    </div>
  )
}

InfoArea.defaultProps = {
  infoElement: <input className='InputClass'></input>
}

/*
- if the value of the infoSpace in InfoArea does not equal divProp return an error
- else change the state of the button area and make it into the 
*/

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

export default function App () {
  <>
    <div className='InputInfo'>
      <div className='BasicInfo'>
        <div className='ContactInfo'>Contact Info</div>
        <div className='InputContainer'>
            <div className='InputTitle Name'>Name</div>
            <Input></Input>
        </div>
        <div className='InputContainer'>
          <div className='InputTitle Email'>Email</div>
          <Input></Input>
        </div>
        <div className='InputContainer'>
          <div className='InputTitle Number'>Number</div>
          <Input></Input>
        </div>
      </div>
      
      <div className='EduInfo'>
        <
        <div className='InputContainer'>
          <div className='InputTitle School'>School</div>
          <Input></Input>
        </div>
        <div className='InputContainer'>
          <div className='InputTitle Degree'>Degree</div>
          <Input></Input>
        </div>
        <div className='InputContainer'>
          <div className='InputTitle Year'>Year Graduated</div>
          <Input></Input>
      </div>
    </div>
      <InputTitle>Name</Input>
      <InputTitle>Email</Input>
      <InputTitle>Number</Input>
      <div className='education'>Education</div>
      <Input text='School'></Input>
      <Input text='Degree'></Input>
      <Input text='Year'></Input>
    </div>
    <div className='buttons'>
      <div className='buttonFlex'>
        <EditButton></EditButton>
        <SubmitButton></SubmitButton>
      </div>
    </div>
  </>
}
