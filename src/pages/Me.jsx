import React from 'react'
import "./css/me.css"


function Me() {
    return (
        <div className='box'>
            <div className='me'>
                <div className='name'>
                    <h1>Oscar</h1>
                    <h2>Chávez</h2>
                    <p>  front end developer </p>
                    <div className='button-me'>
                        <a href='/resume'>Resume</a>
                        <a href='/portfolio'>Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me