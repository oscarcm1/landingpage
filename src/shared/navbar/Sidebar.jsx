import React from 'react'
import { IconHome, IconMic, IconHamburguer, IconBell, IconVideo, IconShorts, IconSubs, IconVideoLibrary, IconHistory, IconProfile, IconVideos, IconClock, IconLike, IconPlayList, IconUp } from '../../components/Icons'

function Sidebar() {
    let active = true;
    function open() {
        if (active) {
            document.querySelector('.sidebar').classList.add('active');
            document.querySelector('.container').classList.add('active');
            active = !active;
        } else {
            active = !active;
            document.querySelector('.sidebar').classList.remove('active');
            document.querySelector('.container').classList.remove('active');
        }
    }
    return (

        <div>
            <nav className='navbar'>
                <ul className='menu'>
                    <li><button onClick={open}> <IconHamburguer /></button></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className='search'>
                    <li> <input type="text" placeholder='Buscar' /></li>
                    <li> <button><IconMic /></button>              </li>
                </ul>
                <ul className='profile'>
                    <li> <button><IconVideo/>  </button></li>
                    <li> <button><IconBell />   </button></li>
                    <li> <div className='picture'>0</div></li>
                </ul>
            </nav>

            <nav className='sidebar'>
                <ul className='list'>
                    <li> <a href=""> <IconHome />        <span>Principal       </span> </a>   </li>
                    <li> <a href=""> <IconShorts />       <span>Shorts         </span> </a>   </li>
                    <li> <a href=""> < IconSubs />        <span>Suscripciones  </span> </a>   </li>
                    <li> <a href=""> <IconVideoLibrary /> <span>Tú             </span> </a>   </li>
                </ul>

                <ul className='list hidden'>
                    <button>TÚ</button>
                    <li> <a href=""> <IconProfile /> <span>Tu canal                 </span> </a>   </li>
                    <li> <a href=""> <IconHistory /> <span>Historial                </span> </a>   </li>
                    <li> <a href=""> <IconVideos />   <span>Tus videos              </span> </a>   </li>
                    <li> <a href=""> <IconClock />    <span>Ver más tarde           </span> </a>   </li>
                    <li> <a href=""> <IconLike />     <span>videos que me gustaron  </span> </a>   </li>
                    <li> <a href=""> <IconPlayList /> <span>Music                   </span> </a>   </li>
                    <li> <a href=""> <IconUp />       <span>Mostrar menos           </span> </a>   </li>
                </ul>
            </nav>

        </div>

    )
}

export default Sidebar