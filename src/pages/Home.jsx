import React from 'react'
import Header from '../components/Header'
import Service from '../components/Service'
import SpeedSection from '../components/Fast'
import Products from '../components/Product'

function Home() {
  return (
    <div className='mt-16'>
      
   <Header />
   <Service/>
   <Products />
   <SpeedSection/>
    </div>
  )
}

export default Home