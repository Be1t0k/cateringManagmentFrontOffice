import React from 'react'
import classes from './MySelect.module.css'

const MySelect = ({ options, defaultValue, children, value, onChange }) => {
  return (
    <select 
    className={classes.MySelect}
    value={value}
    onChange={e=> onChange(e.target.value)}
    >
      <option value={defaultValue} disabled>{children}</option>
      {
        options.map(option =>
          <option key={option.value} value={option.value}>
            {option.title}
          </option>)

      }
    </select>
  )
}

export default MySelect