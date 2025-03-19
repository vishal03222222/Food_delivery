import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousal from '../components/Carousal'

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal /></div>
     
      <div className='m-3'>
        <Cards />
        <Cards />

        <Cards />

        <Cards />


        </div>
     
      <div><Footer /></div>
    </div>

  )
}

export default Home
