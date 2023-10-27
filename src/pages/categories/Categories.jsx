import React from 'react'
import "./categories.css"

function Categories() {
    return (
        <section className='categories'>

            <h2>Top Categories</h2>

            <div className='list'>
                <span className='list-categories'>
                    <i className="bi bi-easel-fill"></i>
                    <a href=''>Design</a>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-file-earmark-code-fill"></i>
                    <a href=''>Development</a>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-bar-chart-fill"></i>
                    <a href=''>Marketing</a>
                </span>
                <span className='list-categories'>
                    <i className="bi bi-cloud-check-fill"></i>
                    <a href=''>IT & Software</a>
                </span>
            </div>
            
        </section>

    )
}

export default Categories