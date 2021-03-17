import React from "react";
import "./card.css"
const Card = (props) => {
  return(
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="btns">
          <button>SHARE</button>
          <button>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;