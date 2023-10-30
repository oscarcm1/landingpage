import React from 'react'
import Background from "../assets/background.mp4"
import "./home.css"
import Ghost from "../svg/ghost.svg"

function Home() {
    return (
        <div className='hallowen'>

            <div className='video'>
                <video loop autoPlay="autoplay" muted src={Background} >  </video>
            </div>

            <nav className='navbar'>
                <h1>Logo</h1>
                <ul className='items'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Product</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </nav>


            <section className='info'>
                <article>
                    <h1>Hallowen</h1>
                    <h2>Landing Page</h2>
                    <p>Text</p>
                    <button>See more</button>
                </article>

                <div className='ghost'>
                    <img src={Ghost} />
                </div>



            </section>





        </div>
    )
}

export default Home