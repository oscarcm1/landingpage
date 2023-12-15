
import React from 'react'
import "./videos.css"
import Video from "../../assets/video.mp4"



function Videos() {
  return (
    <div className='videos'>

      <video src={Video} autoPlay  loop  muted controls></video>
      <video src={Video} autoPlay  loop  muted controls></video>
      <video src={Video} autoPlay  loop  muted controls></video>




    </div>
  )
}

export default Videos