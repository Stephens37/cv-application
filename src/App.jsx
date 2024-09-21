import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Input (props) {
  const inputTitleClass = 'inputTitleClass'
  const inputTitleStyle = {
    className: `${inputTitleClass} ${props.text}`,
    fontSize: '10px'
  }

  const inputClass = 'inputClass'
  const inputStyle = {
    className: 'inputClass',
  }

  return (
    <>
      <div className='cvSection'>
        <div style={inputTitleStyle}>{props.text}</div>
        <input style={inputStyle}></input>
      </div>
    </>
  )
} 

export default App
