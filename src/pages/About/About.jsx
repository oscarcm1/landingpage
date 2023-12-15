import React from 'react'
import "./about.css"
import Me from "../../assets/Me.png"

function About() {
    return (
        <section className='about'>
            <section className='info'>
                <div className='text'>
                    <h1>Agencia Marketing Digital</h1>
                    <p>Estamos comprometidos a llevar tu marca al siguiente nivel. Somos más que una agencia de marketing; somos tus aliados estratégicos en el mundo digital. Descubre cómo podemos transformar tu presencia en línea y optimizar tus resultados con nuestros servicios integrales.</p>
                    <div className='btn'>
                        <button>Empieza Ya</button>
                    </div>
                </div>
            </section>

            <section className='picture'>
                <div className='circle2'>
                    <img src={Me} alt="" />
                </div>
            </section>
        </section>
    )
}

export default About