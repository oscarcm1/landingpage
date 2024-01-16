import React from 'react'
import "./navbar.css"

function Navbar() {

    function active(){
        document.querySelector(".navbar").classList.toggle("active");
    }



  return (
   <nav className='navbar'>
       <button onClick={active}>Active</button>
   </nav>
  )
}

export default Navbar