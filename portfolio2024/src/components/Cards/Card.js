import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
  <>
  <div className='cardWrapper'>
  <h2 className='cardText'>{props.text}</h2>
  <h2 className='cardText2'>{props.text2}</h2>
  <h2 className='cardText2'>{props.text3}</h2>
    <img src={props.icon} alt="" className='cardImage'/>
  </div>
  </>
  )
}

export default Card