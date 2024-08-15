import React from 'react'
import './Home.css'
import Card from '../../components/Cards/Card.js'
import Navbar from '../../components/Navbar/Navbar.js'
import Title from '../../components/Titles/Title.js'
import  Button  from '../../components/Buttons/Button.js'
import arrowUp from '../../icons/arrowUp.svg'
const items = [
  { content: 'ABOUT', columnStart: 1, columnEnd: 2, rowStart: 1, rowEnd: 2, position: 'leftBottom', fontFamily: 'ThunderBlackLC'},
  { content: <Button text="LEARN MORE" icon={arrowUp}/>, columnStart: 2, columnEnd: 3, rowStart: 1, rowEnd: 2, position: 'right' },
  { content: '', columnStart: 1, columnEnd: 2, rowStart: 2, rowEnd: 3, position: 'leftBottom' },
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