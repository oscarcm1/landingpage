import React from 'react'



function Button(props) {

    const {active, activeStatus} = props;
  return (

       <button onClick={active} className='btn'>
            Click
       </button>

  )
}

export default Button