import React from 'react'
import "./choose.css"

function Choose() {
    return (
        <div className='choose'>
            <h1>¿Por qué Elegirnos?</h1>
            <section className='box-choose'> 
                    <article>
                        <h2> Enfoque Personalizado:</h2>
                        <p>Entendemos que cada negocio es único. Adaptamos nuestras estrategias para cumplir con tus objetivos específicos.</p>
                    </article>
                    <article>
                        <h2>Resultados Medibles: </h2>
                        <p>Nos comprometemos con la transparencia y ofrecemos informes detallados para que puedas seguir el progreso de tus campañas.</p>
                    </article>
                    <article>
                        <h2>Equipo Experto:  </h2>
                        <p>Contamos con un equipo diverso de expertos en marketing digital, diseño, desarrollo web y más. Estamos listos para enfrentar cualquier desafío.</p>
                    </article>
            </section>
        </div>
    )
}

export default Choose