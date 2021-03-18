/* eslint-disable no-useless-constructor */
import React from 'react';
// import './App.css';
import Game from './components/game.component'
import RollDice from './components/RollDice'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      winningScore : null,
      players: {
        player1 : {
          name : 'Player1',
          img : 'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._2-512.png',
          currentScore : 0,
          totalScore : 0,
        },
        player2 : {
          name : 'Player2',
          img : 'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._5-512.png',
          currentScore : 0,
          totalScore : 0,
        },
      },
    }
  }
  render() {
    return (
      <RollDice/>
    )
  }
}
// <Game players={this.state.players}/>
export default App;
