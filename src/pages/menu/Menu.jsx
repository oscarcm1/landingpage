import React from 'react'
import "./menu.css";

function Menu() {
    
    return (
            <nav className='menu'>
                    <h1 className='logo'>Logo</h1>
                    <ul className='menu-item'>
                        <li><a>About</a></li>
                        <li><a>Categories</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Sign in</a></li>
                        <li><a className='color'>Sign Up</a></li>
                    </ul>
            </nav>
    )
}

export default Menu