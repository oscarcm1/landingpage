
import './App.css'
import Categories from './pages/categories/Categories'
import Choose from './pages/choose/Choose'
import Menu from './pages/menu/Menu'
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

    </div>
  )
}

export default App
