import React from 'react'
import './Title.css'
const Title = ({items}) => {
  return (
    <>
    <div className='titleContainer'>
    <div className="grid-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`grid-item ${item.position}`} // Use the position prop for class assignment
          style={{
            gridColumnStart: item.columnStart,
            gridColumnEnd: item.columnEnd,
            gridRowStart: item.rowStart,
            gridRowEnd: item.rowEnd,
            fontSize: item.fontSize,
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Title