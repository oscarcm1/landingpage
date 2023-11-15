import React from 'react'
import "../../styles/menu.css"

function Menu() {
  return (
    <nav className='menu'>
        <h1 className='logo'> MR Beast</h1>
        <ul>
            <li><a className='success' href=''>new</a></li>
            <li><a href=''>beast active</a></li>
            <li><a href=''>beast originals</a></li>
            <li><a href=''>top</a></li>
            <li><a href=''>bottoms</a></li>
            <li><a href=''>Accesories</a></li>
            <li><a href=''> all</a></li>
        </ul>
        <ul>
            <li><a href=''>MXN $ | Mexico</a></li>
            <li><a href=''>search</a></li>
            <li><a href=''>X</a></li>
            <li><a className='danger' href=''>Cart</a></li>
        </ul>

    </nav>

  )
}

export default Menu