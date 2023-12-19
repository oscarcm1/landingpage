
import './App.css'
import Navbar from './pages/navbar/Navbar'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Footer from './pages/Footer/Footer'
import Choose from './pages/Choose/Choose'


function App() {

  return (
    <div className='page'>
      <Navbar/>
      <About/>
      <Services/>
      <Choose/>
      <Footer/>
      <div className='bu'></div>
      <div className='bu2'></div>
    </div>
  )
}

export default App
