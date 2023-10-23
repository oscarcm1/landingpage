
import './App.css'
import Ads from './pages/ads/Ads'
import Categories from './pages/categories/Categories'
import Choose from './pages/choose/Choose'
import Menu from './pages/menu/Menu'
import Saying from './pages/saying/Saying'
import Slider from './pages/slider/Slider'
import Socios from './pages/socios/Socios'


function App() {

  return (
    <div className='landing'>

      <header>
        <Menu/>
      </header>
     <Slider/>
     <Socios/>
     <Categories/>
     <Choose/>
     <Saying/>
     <Ads/>

    </div>
  )
}

export default App
