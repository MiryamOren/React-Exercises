import React from 'react'

const CheckBox = (props) => {
  return (
    <div>
      <input type="checkbox" checked={props.checked}></input>
      <label>{props.txt}</label>
    </div>
  )
}

export default CheckBox