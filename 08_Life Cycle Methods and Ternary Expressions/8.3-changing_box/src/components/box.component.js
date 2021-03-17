import React from 'react';
import './box.css'

const Box = (props) => {
  const boxStyle = {
    height: props.side,
    width: props.side,
    'background-color': props.color,
  };
  return (
    <div className = {props.className}
      style={boxStyle}>
    </div>
    );
};

export default Box;