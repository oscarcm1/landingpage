import React from 'react'
import "./socios.css"
import Duolingo from "../../assets/socios/duolingo.png"
import Khan from "../../assets/socios/Khan.png"
import Udemy from "../../assets/socios/udemy.png"
import Google from "../../assets/socios/google.png"
import Facebook from "../../assets/socios/facebook.png"



function Socios() {
  return (
    <section className='socios'>
        <img  src={Duolingo} alt=''/>
        <img  src={Khan}     alt=''/>
        <img  src={Udemy}    alt=''/>
        <img  src={Google}   alt=''/>
        <img  src={Facebook} alt=''/>
    </section>
  )
}

export default Socios
