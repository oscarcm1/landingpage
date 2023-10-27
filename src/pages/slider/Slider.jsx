import React from 'react'
import "./slider.css"

function Slider() {
    return (
        <div className='box-slider'  >

            <div className='slider'>
                <div className='info-slider'>
                    <span>Conoce la plataforma</span>
                    <h1>Invest in knowledge and your future!</h1>

                    <div className='actions'>
                        <button className='buy'>   <i className="bi bi-cart-check-fill"></i> <p>Buy Now</p></button>
                        <button className='play'>  <i className="bi bi-play-fill"></i> <p>Play Video</p></button>
                    </div>
                </div>
                
                <div className='picture-slider'>
                <img src="https://img.freepik.com/psd-gratis/3d-mujer-sentada-libros-leyendo_23-2149485779.jpg?w=740&t=st=1698436257~exp=1698436857~hmac=d427783659d51773dc5574e4563b7f6ec4833fc2f1c5cec37eb928999574482e"/>
                </div>
            </div>

            <p className='info'>3000 companies colaborate with us
                to build succesfull carreer for our students
            </p>
            
        </div>
    )
}

export default Slider