import React from 'react';
import './player.css'
  
const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-img"><img src={props.img} alt="player-icon"></img></div>
      <div className="score">Current Score: {props.currentScore}</div>
      <div className="score">Total Score: {props.totalScore}</div>
    </div>
  )
}

export default Player; 