
import './App.css'


const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: ""
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1535051/pexels-photo-1535051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/848117/pexels-photo-848117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    id: 10,
    url: "https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },

]

function App() {

  return (
    <div className='container'>
      
      <section className='box'>
        {images.map((key) =>
          <>
            <div className="card" key={key.id}>
              <img src={key.url} alt="" />
            </div>
          </>
        )}
        {images.map((key) =>
          <>
            <div className="card" key={key.id}>
              <img src={key.url} alt="" />
            </div>
          </>
        )}

        {/* <div className="card">1</div>
      <div className="card">2</div>
      <div className="card">3</div>
      <div className="card">4</div>
      <div className="card">5</div>
      <div className="card">6</div>
      <div className="card">7</div>
      <div className="card">8</div>
      <div className="card">9</div>
      <div className="card">10</div>
       */}


      </section>
    </div>
  )
}

export default App
