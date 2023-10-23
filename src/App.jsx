
import './App.css'
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
     
    </div>
  )
}

export default App
