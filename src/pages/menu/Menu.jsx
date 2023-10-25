import React, { useState } from 'react'
import "./menu.css"
import Logo from "../../assets/logo.png"


function Menu() {


    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    const [icon, setIcon] = useState("bi bi-caret-left-fill");

    function activeMenu() {
        handleClick();
        if (click) {

            document.querySelector('.card-menu').classList.add('active');
            document.querySelector('.list-menu').classList.add('active');
            document.querySelector('.box').classList.add('active');
            setIcon("bi bi-caret-right-fill");
        } else {
            document.querySelector('.card-menu ').classList.remove('active');
            document.querySelector('.list-menu').classList.remove('active');
            document.querySelector('.box').classList.remove('active');
            setIcon("bi bi-caret-left-fill");
        }
    }



    return (
        <div className='menu'>

            <div className='card-menu'>

                <div className='open'>
                    <button onClick={activeMenu}><i className={icon}></i></button>
                </div>

                {/* <div className='logo'>
                    <img src={Logo} />
                    <h1>Oscar  Chávez</h1>
                </div> */}

                <div className='list-menu'>
                    <ul className='menu-item'>
                        <li><a className='btn'><i className="bi bi-house-fill">       </i>  <span>Home       </span>   </a></li>
                        <li><a className='btn'><i className="bi bi-people-fill">      </i>  <span>Users      </span>   </a></li>
                        <li><a className='btn'><i className="bi bi-person-lines-fill"></i>  <span>Client     </span>   </a></li>
                        <li><a href='dashbard' className='btn'><i className="bi bi-speedometer">      </i>  <span>Dashboard  </span>   </a></li>
                        <li><a className='btn'><i className="bi bi-gear-fill">        </i>  <span>Options    </span>   </a></li>
                        <li><a className='btn'><i className="bi bi-x-circle-fill">    </i>  <span>Exit       </span>   </a></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Menu