import React from "react";
import "./App.css";
import Album from './components/album.component'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <Album 
          className = "heb"
          image = "https://img.discogs.com/G_SyIW3ijpOY_-S85TBhu3LXRcc=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6457618-1419727054-3845.jpeg.jpg"
          title = "זמנים מוזרים"
          artist = "המכשפות"
          length = "43:00"
          link = "https://www.youtube.com/watch?v=L6zlsmYfuBw&list=PLYJeU3Rstprdtfgk1YhT-iotq_Rpy1UQk"
        />
        <Album 
          image = "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png"
          title = "1989"
          artist = "Taylor Swift"
          length = "48:41"
          link = "https://www.youtube.com/watch?v=w1HU24bNbX8&list=OLAK5uy_lglIKPOFCG5X9_Rf4Hxsmmh9GEeHL94Jo"
        />
        <Album 
          image = "https://upload.wikimedia.org/wikipedia/en/f/f1/Elladukesongbook.jpg"
          title = "Ella Fitzgerald Sings the Duke Ellington Song Book"
          link = "https://www.youtube.com/watch?v=aBbo2NzBMg8&list=PLKjjIa7cwTkL80Dlh40p2BX2ueEOE7W7e"
        />
        <Album />
      </div>
    )
  };
}
export default App;
