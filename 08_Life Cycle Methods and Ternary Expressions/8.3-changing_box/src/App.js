import React from "react";
import "./App.css";
import Box from './components/box.component'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'blue', class : ''};
    this.counter = 0;
  }
  getColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  }
  componentDidMount() {
    setTimeout(() => {
      const color = this.getColor();
      this.setState({color: color, class : ''});
      this.counter++;
    }, 500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(this.counter);
      const color = this.getColor();
      const boxClass = this.counter > 5 ? 'circle' : '';
      this.setState({color: color, class : boxClass});
      this.counter++;
    }, 500);
  }
  render(){
    return (
    <div className="container">
      <Box 
        className= {this.state.class}
        side = '300px'
        color = {this.state.color}
      />
    </div>
    )
  };
}
export default App;
