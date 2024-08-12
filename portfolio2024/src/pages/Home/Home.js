import React from 'react'
import './Home.css'
import Card from '../../components/Cards/Card.js'
import Navbar from '../../components/Navbar/Navbar.js'
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
    </div>
    </>
  )
}

export default Home