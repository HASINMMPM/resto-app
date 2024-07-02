
import Banner from '../component/Banner'
import Catagories from '../component/Catagories'
import Specialdish from '../component/Specialdish'
import Services from '../component/Services'

const Home = () => {
  return (
    <div className=' bg-white '>
      <Banner/>
      <Catagories/>
      <Specialdish/>
      <Services/>
    </div>
  )
}

export default Home