/* eslint-disable no-useless-constructor */
import React from 'react';
import CheckBox from './components/CheckBox.component'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <CheckBox 
          txt = 'I read the terms of the app'
          checked = {false}
        />
        <CheckBox 
          txt = 'I accept the terms of the app'
          checked = {false}
        />
        <CheckBox 
          txt = 'I want to get the weekly news letter'
          checked = {true}
        />
        <CheckBox 
          txt = 'I want to get sales and offers'
          checked = {true}
        />
      </div>
    )
  };
}
export default App;
