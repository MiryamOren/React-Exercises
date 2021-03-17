/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './album.css'

const Album = (props) => {
  return (
    <div className={`album ${props.className}`}>
      <img src={props.image} alt=""></img>
      <h2>{props.title}</h2>
      <h3>{props.artist}</h3>
      <p>Length: {props.length}</p>
      <a href={props.link} target="_blank">link to listening</a>
    </div>
  )
}

Album.defaultProps = {
  className : "",
  image : "https://png2.cleanpng.com/sh/4185d1475c6b4fa3847c67553e21f7d1/L0KzQYm3U8A5N5RBiZH0aYP2gLBuTgBpd590fARqcHiwgrbqjCJlNZ11ReRuY3B1dH7qhL1lcaRoh9l7YYDriX68gfExbpYAe6ZuY3K3SXA4U8Y5OWQ7T6MAMkC4QIG6WMA0OmM9RuJ3Zx==/kisspng-phonograph-record-lp-record-cd-discography-5aa0fe9c4ecb49.1368136715205003803228.png",
  title : "Unknown-Album",
  artist : "Unknown-Artist",
  length : "unknown",
  link : "https://www.youtube.com/"
};

export default Album;