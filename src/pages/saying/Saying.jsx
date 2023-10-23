import React from 'react'
import "./saying.css"
import Student from "../../assets/student.png"

function Saying() {
  return (
     <section className='saying'>

        <article>
            <h3>What Our Students Saying</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit orci, condimentum turpis elementum massa vel erat tristique, habitant morbi felis phasellus tortor ante at. Scelerisque himenaeos imperdiet a fringilla faucibus porta congue,</p>
        </article>

        <div  className='picture'>
          <img src={Student} />
        </div>


     </section>
  )
}

export default Saying