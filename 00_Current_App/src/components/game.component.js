/* eslint-disable no-useless-constructor */
import React from 'react'
import Player from './player.component'
import './game.css';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
class Game extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    console.log(props);
    
  }
  rollAll() {
    this.reactDice.rollAll()
  }
  render (){
    const player1 = this.props.players.player1;
    const player2 = this.props.players.player2;
    return(
      <div className="game">
        <div className="game-board">
          <div className="new-game-btn"></div>
          <div className="dices">
            <ReactDice
              numDice={2}
              rollDone={this.rollDoneCallback}
              ref={dice => this.reactDice = dice}
            />
          </div>
          <div className="game-btns"></div>
        </div>
        <div className="players">
          <Player 
            name = {player1.name}
            img = {player1.img}
            currentScore = {player1.currentScore}
            totalScore = {player1.totalScore}
          />
          <Player 
            name = {player2.name}
            img = {player2.img}
            currentScore = {player2.currentScore}
            totalScore = {player2.totalScore}
          />
        </div>
      </div>
    )
    
  }
}

export default Game;