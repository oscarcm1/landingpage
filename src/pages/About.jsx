import React from 'react'
import "./css/about.css"
import Profile from "../assets/picture.png"

function About() {
    return (
        <div className='box'>

            <div className='about'>
                <div className='about-information'>
                    <div className='title-about'>
                        <h2>About</h2>
                        <a>oscarchavez2905@gmail.com</a>
                    </div>

                    <div className='description'>
                        <p>
                            Front-end developer with 2 years of experience
                            My main focus is turning creative designs into interactive websites
                            and applications that are not only visually stunning, but also highly usable and accessible
                        </p>
                    </div>
                    <div className='state'>
                        <p>México</p>
                        <p>Estado de México</p>

                    </div>
                </div>


                <div className='prof'>
                    <img src={Profile} />
                </div>
            </div>






        </div>
    )
}

export default About