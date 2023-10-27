import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <div className='footer'>

            <div className='menu-footer'>
                <h2>Logo</h2>
                <p>Márton tér 027. 45. emelet , Budapest , 7881 </p>
                <span className='social-media'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                </span>
            </div>

            <div className='menu-footer'>
                <h2>Useful Link</h2>
                <ol>
                    <li>About</li>
                    <li>Categories</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ol>
            </div>


            <div className='menu-footer'>
                <h2>Our project</h2>
                <ol>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    <li>Project 4</li>
                </ol>
               

            </div>

            <div className='menu-footer'>
                <h2>Last news</h2>
                  <input placeholder='Search..' />
                  <button>Suscribe</button>
            </div>




        </div>
    )
}

export default Footer