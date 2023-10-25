import React from 'react'
import "./dashboard.css"
import { GraphicPie, GraphicRadar } from './Graphics/Graphics'


// import { Pie } from 'react-chartjs-2'
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables)


function Dashboard() {



    return (
        <div className='box'>

            <div className='dashboard'>

                <div class="card-grid">
                    <div>
                        <GraphicPie wd="100"  hg="100"/>

                        {/* <img src="https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                    </div>
                    <div>
                        {/* <img src="https://plus.unsplash.com/premium_photo-1673254928968-b6513f32d43b?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                   
                        <GraphicPie wd="100"  hg="100"/>
                    </div>
                    <div class="tall">
                      <GraphicPie    wd="100px"  hg="100px"/>
                        {/* <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                    </div>
                    <div class="wide">
                        <img src="https://images.unsplash.com/photo-1697525930011-0cc03edfbb3d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div>
                        <img src=" https://images.unsplash.com/photo-1682687220866-c856f566f1bd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                 
                    <div class="tall">
                        <img src="https://plus.unsplash.com/premium_photo-1675700394062-fc9c5d2c9b02?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div class="big">
                        <img src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1696522212810-f6b5db422a4b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div class="wide">
                        <img src="https://images.unsplash.com/photo-1698046828316-9219096ab432?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    
                </div>


            </div>





        </div>
    )
}

export default Dashboard