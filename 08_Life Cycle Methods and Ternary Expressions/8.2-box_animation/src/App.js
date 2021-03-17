import React from "react";
import "./App.css";
import Box from './components/box.component'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {color: 'blue'};
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({color: 'purple'});
  //   }, 1000);
  // }

  // componentDidUpdate() {
  //   document.querySelector('#updated-color').innerHTML = 
  //     `The updated favorite color is ${this.state.color}`;
  // }
  render(){
    return (
    <div className="container">
      <Box 
        height = {100}
        width = {150}
      />
      <Box 
        height = {70}
        width = {100}
      />
      <Box 
        height = {150}
        width = {80}
      />
    </div>
    )
  };
}

export default App;
