import React from 'react';
import './box.css'

const Box = (props) => {
  const boxStyle = {
    height: props.height,
    width: props.width,
  };
  return (
    <div 
      className="box"
      style={boxStyle}>
    </div>
    );
};

export default Box;