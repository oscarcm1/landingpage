import React from 'react'
import "./navbar.css"
import { Icon } from '@iconify/react';
import Astronaut from "../../assets/astronaut.png"
import Astronaut2 from "../../assets/astronaut2.png"
import Helmet from "../../assets/helmet.png"

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

        <section className='gallery'>
            <div className='picture'>
              <img  src={Astronaut2}/>
            </div>
           
            <article>
                <h3>Look our gallery</h3>
                <p>Lorem ipsum dolor sit amet. At libero accusamus et quia sunt et obcaecati nesciunt est omnis omnis 33 voluptas ipsum. Eum maxime quas aut earum inventore nam aperiam voluptatem qui labore odio et internos consequatur. Rem numquam perspiciatis aut galisum internos vel libero rerum id perspiciatis magni. Est repudiandae sapiente aut alias assumenda aut ratione alias sed dolorem recusandae.</p>
            </article>
        </section>

        <section className='gallery bg'>
            <div className='opacity'>
            <article>
                <h3>What we think?</h3>
                <p>Lorem ipsum dolor sit amet. At libero accusamus et quia sunt et obcaecati nesciunt est omnis omnis 33 voluptas ipsum. Eum maxime quas aut earum inventore nam aperiam voluptatem qui labore odio et internos consequatur. Rem numquam perspiciatis aut galisum internos vel libero rerum id perspiciatis magni. Est repudiandae sapiente aut alias assumenda aut ratione alias sed dolorem recusandae.</p>
                <p>Lorem ipsum dolor sit amet. At libero accusamus et quia sunt et obcaecati nesciunt est omnis omnis 33 voluptas ipsum. Eum maxime quas aut earum inventore nam aperiam voluptatem qui labore odio et internos consequatur. Rem numquam perspiciatis aut galisum internos vel libero rerum id perspiciatis magni. Est repudiandae sapiente aut alias assumenda aut ratione alias sed dolorem recusandae.</p>
            </article>

            <div className='picture'>
            <img  src={Helmet}/>
            </div>
            </div>
        </section>



        <section className='count'>

            <span className=''>
                <p className='number'>7890</p>
                <p>Coffee cups</p>
            </span>
            <span className=''>
                <p  className='number'>1 M</p>
                <p>sUBSCRIBERS</p>
            </span>
            <span className=''>
                <p  className='number'>1509</p>
                <p>Customers</p>
            </span>
            <span className=''>
                <p  className='number'>5972</p>
                <p>purchases</p>
            </span>
        </section>







    <section className='contact'>
      <div className='bg-contact'>
        <section className='card-contact'>
            <h4>Contact</h4>
            <section className='box-info'>

                <div className='adress'>
                  <h5>Narra Gallery</h5>
                  <p>311 harrison street, san francisco, ca, 978000</p> 
                  <p>9364-2781-359</p>
                  <p>company@gmail.com</p>
                </div>
                <div className='bg3'>  </div>
            </section>         
        </section>
        </div>
    </section>















        </div>

    )
}

export default Navbar