import React from "react";
import "./App.css";
import Card from "./components/card.component"

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {display : true};
  }
  click(){
    console.log('click');
    const prev = this.state.display;
    this.setState({display : !prev});
  }
  render(){
    return <Card 
    display={this.state.display}
    func={this.click.bind(this)}
    />
  };
  
}

export default App;
