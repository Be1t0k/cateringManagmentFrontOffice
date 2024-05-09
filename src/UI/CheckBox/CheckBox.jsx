import React from 'react'
import './CheckBox.css'
const MyCheckBox = ({children, ...props}) => {
  return (
    <input type="checkbox" className='custom-checkbox'  {...props}/>
  )
}

export default MyCheckBox