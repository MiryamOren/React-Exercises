import React from "react";
import "./App.css";
import Card from "./components/card.component"

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Card
          imgSrc = "https://picsum.photos/300?random=1"
          title = "Card1" 
          text= "Consectetur adipisicing elit."
        />
        <Card
          imgSrc = "https://picsum.photos/300?random=2"
          title = "Card2" 
          text= "Lorem ipsum dolor sit amet"
        />
        <Card
          imgSrc = "https://picsum.photos/300?random=3"
          title = "Card3" 
          text= "Autem vero quam pariatur?"
        />
      </div>
    );
  };
  
}

export default App;
