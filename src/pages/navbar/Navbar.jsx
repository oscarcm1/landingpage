import React from 'react'
import "./navbar.css"
import { Icon } from '@iconify/react';
import Astronaut from "../../assets/astronaut.png"

function Navbar() {
    return (

        <div className='background'>



        <section className='header'>

            <nav className='navbar'>
                <h1>Logo</h1>

                <ul className='items'>
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>


            <section className='slider'>

                <div className='picture'><img  src={Astronaut}/></div>

                <article>
                    <h1> Space shuttle</h1>
                    <h2>Discovery</h2>
                    <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis voluptatem sit quia ratione. Vel reiciendis molestiae sit vero nisi ut minima earum non dolores delectus. Est veniam architecto ea ipsam quaerat eum tenetur consequuntur non harum quidem. Ad quidem quam et ducimus blanditiis qui eligendi quos sit quaerat internos nam fuga ipsa ut porro magni ut molestiae accusamus.</p>
                </article>

            </section>


            <section className='feature'>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="ion:planet-sharp" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 1</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="solar:crop-bold" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 2</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="jam:thunder-f" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 3</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="vaadin:medal" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 4</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="mdi:web" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 5</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>

                <div className='item-feature'>
                    <span className='icon'><Icon icon="heroicons:signal-slash" color="white" /></span>
                    <article>
                        <h3>We are</h3>
                        <h4>Feature 1</h4>
                        <p>Lorem ipsum dolor sit amet. Eum nobis dolores eos nobis voluptas ab perferendis</p>
                    </article>
                </div>









            </section>













        </section>


        </div>

    )
}

export default Navbar