import React from 'react'
import "./navbar.css"

function Navbar() {
    return (

        <nav className='menu'>
            <h1>Logo</h1>
            <ul className='list'>
                <li><a href="">Destinations</a></li>
                <li><a href="">Booking</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Find a tour</a></li>
            </ul>
        </nav>


    )
}

export default Navbar