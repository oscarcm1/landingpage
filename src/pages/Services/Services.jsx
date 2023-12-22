import React from 'react'
import "./services.css"
import { Icon } from '@iconify/react';


function Services() {
    return (
        <section className='services'>
            <h1>Servicios que Ofrecemos</h1>
            <div className='list-services'>
                <article className='active'>
                    <div className='content'>
                        <Icon icon="fluent:design-ideas-24-filled" />
                        <h2>Diseño y Desarrollo Web Profesional:</h2>
                        <p>Tu sitio web es la vitrina</p>
                        <button>Contactanos</button>
                    </div>
                </article>

                <article>
                    <div className='content'>
                        <Icon icon="material-symbols:developer-mode-tv-outline-rounded" />
                        <h2>Optimización de Motores de Búsqueda (SEO)</h2>
                        <p>Aumentamos tu visibilidad en línea, asegurando que tu marca aparezca en los primeros resultados de búsqueda. Más visibilidad significa más oportunidades de negocio.</p>
                        <button>Contactanos</button>
                    </div>
                </article>

                <article >
                    <div className='content'>
                        <Icon icon="nimbus:marketing" />
                        <h2>Analítica y Mejora Continua: </h2>
                        <p>Utilizamos datos para tomar decisiones informadas. Con análisis detallados, ajustamos estrategias para maximizar el rendimiento y alcanzar tus metas.</p>
                        <button>Contactanos</button>
                    </div>
                </article>
            </div>


        </section>
    )
}

export default Services