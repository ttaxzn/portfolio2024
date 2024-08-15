import React from 'react'
import './Button.css'
const Button = (props) => {

    const hasIcon=!!props.icon;
  return (
    <>
    <div className='buttonTextWrapper'>
    <div className='buttonText'>{props.text}</div>
    </div>
 
    <img src={props.icon} alt="" className={`buttonIcon ${!hasIcon ? 'hidden' : ''}`}/>

    </>
  )
}

export default Button
