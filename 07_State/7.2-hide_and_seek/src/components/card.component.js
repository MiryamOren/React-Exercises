import React from "react";
import "./card.css"

const Card = (props) => {
  console.log(props.func);
  const box = props.display? <div className="box"></div> : '';
  return (
    <div className="card">
      <button onClick={() => {props.func()}}>Show/Hide</button>
      {box}
    </div>
  );
};

export default Card;