import React from "react";
import "./App.css";
import Button from './components/button.component'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {ColorsArr : ['blue', 'yellow', 'green'], currentColor : ''};
  }
  clickHandler(param){
    console.log(param);
    this.setState({currentColor : param});
  }
  render(){
    return (
      <div className="container">
        <div className="btns">
          {this.state.ColorsArr.
            map(el => <Button
               color = {el} 
               func = {this.clickHandler.bind(this)}
               />)}
        </div>
        <h2>The color selected is: {this.state.currentColor}</h2>
      </div>
    )
  };
}
export default App;
