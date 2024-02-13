import React from 'react'

function Page() {
    return (
        <div>

            <header className='menu'>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Services</a></li>
                        <li><a className='color' href="">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <section className='slider'>
                <article>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet. Id quos vero qui quisquam sapiente et totam quia id galisum animi eum voluptatum neque. Est facilis minima id quod soluta eos reiciendis sapiente et tempore exercitationem. Qui dolorum rerum nam eius quam aut reprehenderit culpa. Aut dolores amet ut nihil dolor et vitae laborum.</p>
                </article>

                <article>
                    <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-expertos_114360-451.jpg?w=740&t=st=1707855405~exp=1707856005~hmac=a293015ec05374279a7c4bc6051fa4635ee66848245684824d40b20de0623bb0" alt="" />
                </article>
            </section>



            <section className='scores'>
                <article>
                    <h3>12</h3>
                    <p>Years of Industrie</p>
                </article>

                <article>
                    <h3>75</h3>
                    <p>Destinations</p>
                </article>
                <article>
                    <h3>12</h3>
                    <p>Years of Expirence</p>
                </article>

                <article>
                    <h3>250</h3>
                    <p>Clients</p>
                </article>
            </section>


            <section className='travel'>

                <h2>Let´s Travel</h2>

                <article>
                    <img src="https://img.freepik.com/vector-gratis/trofeo_78370-345.jpg?w=740&t=st=1707856014~exp=1707856614~hmac=70d9489bf6ccc8488d61c6ad42dfbc3a412b83e34deb54d7f0654c1820c908c5" alt="" />
                    <div className='info'>
                        <h4>We have the expirence under our belt</h4>
                        <p>Aut voluptas nulla est assumenda nihil a blanditiis voluptatem? Et impedit doloremque et facilis delectus et quia cumque. Nam consectetur consequatur aut alias repellat eum deleniti accusamus ut eaque magnam et illum dolores non reiciendis fugit est dicta voluptatibus.</p>
                    </div>
                </article>

                <article>
                    <div className='info'>
                        <h4>Collaborations</h4>
                        <p>Aut voluptas nulla est assumenda nihil a blanditiis voluptatem? Et impedit doloremque et facilis delectus et quia cumque. Nam consectetur consequatur aut alias repellat eum deleniti accusamus ut eaque magnam et illum dolores non reiciendis fugit est dicta voluptatibus.</p>
                    </div>
                    <img src="https://img.freepik.com/vector-premium/apreton-manos-empresarial-informes-presentaciones_156780-50.jpg?w=740" alt="" />
                </article>

                <article>
                    <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-alcancia_114360-5612.jpg?w=740&t=st=1707856484~exp=1707857084~hmac=0967aefa7323d3eeec3cf97fd814f3f3137b93ddfc0e384ee5ae9608a9521986" alt="" />
                    <div className='info'>
                        <h4>Affordable Pricing</h4>
                        <p>Aut voluptas nulla est assumenda nihil a blanditiis voluptatem? Et impedit doloremque et facilis delectus et quia cumque. Nam consectetur consequatur aut alias repellat eum deleniti accusamus ut eaque magnam et illum dolores non reiciendis fugit est dicta voluptatibus.</p>
                    </div>
                </article>
            </section>


            <section className='team'>

                <h3>Our Team</h3>


                <div className='team-pictures'>
                    <article className='profile'>
                        <img src="https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?w=740&t=st=1707856669~exp=1707857269~hmac=c5e642b57d0fb6e402055035fc59da6e2c53a18421434224785031f01c898905" alt="" />
                        <h4>Sheldon</h4>
                        <p>Co Founder</p>
                    </article>
                    <article className='profile'>
                        <img src="https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?w=740&t=st=1707856669~exp=1707857269~hmac=c5e642b57d0fb6e402055035fc59da6e2c53a18421434224785031f01c898905" alt="" />
                        <h4>Sheldon</h4>
                        <p>Co Founder</p>
                    </article>
                    <article className='profile'>
                        <img src="https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?w=740&t=st=1707856669~exp=1707857269~hmac=c5e642b57d0fb6e402055035fc59da6e2c53a18421434224785031f01c898905" alt="" />
                        <h4>Sheldon</h4>
                        <p>Co Founder</p>
                    </article>

                </div>
            </section>






            <section className='contact'>

                <h3>Get in touch with us</h3>


                <div className='footer'>
                    <article>
                        <p>Email</p>
                        <a href="">hello@gmail.com</a>
                    </article>
                    <article>
                        <p>Location</p>
                        <a href="">Address</a>
                    </article>
                    <article>
                        <p>Phone</p>
                        <a href="">+52</a>
                    </article>

                </div>


            </section>













        </div>
    )
}

export default Page