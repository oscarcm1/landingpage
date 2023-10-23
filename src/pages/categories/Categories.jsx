import React from 'react'
import "./categories.css"

function Categories() {
    return (
        <section className='categories'>

            <h2>Top Categories</h2>

            <div className='list'>
                <span className='list-categories'>
                    <i className="bi bi-easel-fill"></i>
                    <p>Design</p>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-file-earmark-code-fill"></i>
                    <p>Development</p>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-headset-vr"></i>
                    <p>Marketing</p>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-cloud-check-fill"></i>
                    <p>IT & Software</p>
                </span>
            </div>
            
        </section>

    )
}

export default Categories