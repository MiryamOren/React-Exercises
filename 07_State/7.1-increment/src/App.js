import React from "react";
import "./App.css";
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {value : 0};
  }
  updateVal(){
    console.log('hiiii');
    const val = this.state.value;
    this.setState({value : val + 1});
  }
  render(){
    return (
      <div>
        <p>current value: {this.state.value}</p>
        <button 
        onClick={() => {this.updateVal();}}>
          Increment
        </button>
      </div>
      
    );
  };
  
}

export default App;
