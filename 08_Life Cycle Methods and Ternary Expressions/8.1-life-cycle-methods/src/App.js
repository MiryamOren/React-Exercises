import React from "react";
import "./App.css";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {color: 'blue'};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'purple'});
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector('#updated-color').innerHTML = 
      `The updated favorite color is ${this.state.color}`;
  }
  render(){
    return (
    <div>
      <h1>My favorite color is {this.state.color}</h1>
      <div id="updated-color"></div>
    </div>
    )
  };
}

export default App;
