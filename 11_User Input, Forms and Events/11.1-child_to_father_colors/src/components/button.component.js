import React from 'react'
import './button.css'

const Button = (props) => {
  const style = {
    backgroundColor : props.color,
  }
  return (
    <button style={style} onClick={() => {props.func(props.color)}}>
      {props.color}
    </button>
  );
}

export default Button