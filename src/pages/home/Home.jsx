import React from 'react'
import { data } from './Data'

function Home() {
    return (
        <div className='container'>
            <div className='box'>
                {
                    data.map((key) =>
                        <div className='card' key={key.id}>
                            <video src={key.video} controls></video>
                            <h2>  {key.title}</h2>
                            <p>   {key.autor}</p>
                            <span>{key.view}</span>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Home