import React from 'react'
import "./slider.css"
import Model from "../../assets/model.png"

function Slider() {
    return (
        <div className='box-slider'>

            <div className='slider'>
                <div className='info-slider'>
                    <span>Conoce la plataforma</span>
                    <h1>Invest in knowledge and your future!</h1>

                    <div className='actions'>
                        <button className='buy'>Buy Now</button>
                        <button className='play'>Play Video</button>
                    </div>
                </div>
                
                <img className='picture-slider' src={Model} />

            </div>

            <p className='info'>3000 companies colaborate with us
                to build succesfull carreer for our students
            </p>
            
        </div>
    )
}

export default Slider