import React from "react";
import "./App.css";
import Spiner1 from './components/spiner1.component'
import Spiner2 from './components/spiner2.component'
import Spiner3 from './components/spiner3.component'
import Spiner4 from './components/spiner4.component'
class App extends React.Component {
  constructor(props){
    super(props);
    this.spiners = [Spiner1, Spiner2, Spiner3, Spiner4];
    const indx = Math.floor(Math.random() * 3);
    this.state = {component: this.spiners[indx], update: true};
    this.counter = 0;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({update: false});
    }, 5000);
  }
  render(){
    return this.state.update && <this.state.component />;
  };
}
export default App;
