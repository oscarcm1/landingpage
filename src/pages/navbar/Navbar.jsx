import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <nav className='menu'>
            <h1>Logo</h1>
            <ul className='list'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Sobre mí</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="" className='color'>Get Started</a></li>
            </ul>
        </nav>
    )
}

export default Navbar