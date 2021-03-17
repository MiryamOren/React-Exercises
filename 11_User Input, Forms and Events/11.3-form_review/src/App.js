/* eslint-disable no-useless-constructor */
import React from 'react';
import Form from './components/Form.component'
import './app.css'

class App extends React.Component {
  constructor(props){
    super(props);

    this.formData = {
      'first-name' : '',
      'last-name' : '',
      'age' : '18 - 30',
      'free-txt' : '',
    }
    this.form = <Form 
                  data = {this.formData}
                  onChange={this.changeHandler.bind(this)}
                  onClick={this.formSubmitHandler.bind(this)}
                />;
    this.state = {form : true,  review: false};
  }

  formSubmitHandler() { this.setState({form : false,  review: true}); }
  changeHandler(element){
    this.formData[element.id] = element.value;
    console.log(this.formData);
  }
  reviewBackHandler() { this.setState({form : true,  review: false}); }
  reviewSubmitHandler(){ this.setState({form : false,  review: false}); }

  
  render(){
    return (
      ((this.state.form && this.form) || 
      (
        this.state.review &&
        <div className="review">
          {Object.keys(this.formData).map((key, indx) => {
            return <div>{`${key.split('-').join(' ')}: ${this.formData[key]}`}</div>
          })}
          <button onClick={this.reviewBackHandler.bind(this)}>Back</button>
          <button onClick={this.reviewSubmitHandler.bind(this)}>Submit</button>
        </div>
      )
    )) ||
    (
      <div className="submit">
        your details have been received. thank you!
      </div>
    )
  };
}
export default App;
