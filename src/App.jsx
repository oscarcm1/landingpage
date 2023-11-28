
import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [tiempo, setTiempo] = useState(new Date());
  const actualizarTiempo = () => {
    setTiempo(new Date());
  };

  useEffect(() => {
    const intervalo = setInterval(actualizarTiempo, 1000);
    return () => clearInterval(intervalo);
  }, []);



  return (
    <>
      <section className='time'>
        <div>
        </div>
        <div className='background'>
          <div className='box'>

            <h2> {tiempo.toLocaleTimeString()}</h2>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
