import React from 'react'
import Banner from '../component/Banner'
import Catagories from '../component/Catagories'
import Specialdish from '../component/Specialdish'

const Home = () => {
  return (
    <div className='bg-white '>
      <Banner/>
      <Catagories/>
      <Specialdish/>
    </div>
  )
}

export default Home