import React from 'react'
import './Home.css'
import Card from '../../components/Cards/Card.js'
import Navbar from '../../components/Navbar/Navbar.js'
import Title from '../../components/Titles/Title.js'
const items = [
  { content: 'about', columnStart: 1, columnEnd: 2, rowStart: 1, rowEnd: 2, position: 'left', fontSize: '5vh'},
  { content: 'Item 2', columnStart: 2, columnEnd: 3, rowStart: 1, rowEnd: 2, position: 'right' },
  { content: 'Item 3', columnStart: 1, columnEnd: 2, rowStart: 2, rowEnd: 3, position: 'left' },
  { content: 'Item 4', columnStart: 2, columnEnd: 3, rowStart: 2, rowEnd: 3, position: 'right' },
];
const Home = () => {
  return (
    <>
    <div className='page'>
        <Card 
        text="TEA ABUSELIDZE"
        text2="TEA ABUSELIDZE"
        text3="TEA ABUSELIDZE"
        />
        <Navbar/>


   <Title items={items}/>
    </div>
    </>
  )
}

export default Home