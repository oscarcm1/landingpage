import React from 'react'

function Page() {
    return (
        <div>

            <header className='menu'>
                <h1>Logo</h1>
                <a href="" className='color'>Sign in</a>
            </header>

            <section className='slider'>
                <article>
                    <h2>Summer Season</h2>
                    <h3>Healthy Diet</h3>
                    <h4>Strawberry fields</h4>
                    <p>We are having huge collection of Healthy Juices foreveryone.</p>
                    <a href="" className='color'>Explore</a>
                </article>
                <article className='product'>
                    <img src="https://img.freepik.com/foto-gratis/batido-fresa-platano-fresco-tarro-aislado-sobre-fondo-blanco_123827-20726.jpg?w=360&t=st=1707858790~exp=1707859390~hmac=bd651134244289352c25e0a888b5436fd5dcb9c904e8e2fea1321254d3885360" alt="" />
                </article>
            </section>


            <section className='box-product'>
                <article>
                    <img src="https://img.freepik.com/vector-premium/fondo-fresco-bebidas-helados-verano_1013976-471.jpg?w=740" alt="" />
                    <h3>Chocolate Ice cream</h3>
                    <p>Best construction company sloga your outer world structi.</p>
                </article>
                <article>
                    <img src="https://img.freepik.com/vector-premium/fondo-fresco-bebidas-helados-verano_1013976-471.jpg?w=740" alt="" />
                    <h3>Chocolate Ice cream</h3>
                    <p>Best construction company sloga your outer world structi.</p>
                </article>
                <article>
                    <img src="https://img.freepik.com/vector-premium/fondo-fresco-bebidas-helados-verano_1013976-471.jpg?w=740" alt="" />
                    <h3>Chocolate Ice cream</h3>
                    <p>Best construction company sloga your outer world structi.</p>
                </article>
            </section>


            <section className='cakes'>
                <h2>Cakes</h2>

                <div className='list-cakes'>
                    <article>
                        <img src="https://img.freepik.com/fotos-premium/magdalena-glaseado-rosa-chispas_391229-9055.jpg?w=740" alt="" />
                        <h3>Chocolate cake</h3>
                        <p>Description</p>
                        <button>Buy</button>
                    </article>

                    <article>
                        <img src="https://img.freepik.com/fotos-premium/magdalena-glaseado-rosa-chispas_391229-9055.jpg?w=740" alt="" />
                        <h3>Chocolate cake</h3>
                        <p>Description</p>
                        <button>Buy</button>
                    </article>

                    <article>
                        <img src="https://img.freepik.com/fotos-premium/magdalena-glaseado-rosa-chispas_391229-9055.jpg?w=740" alt="" />
                        <h3>Chocolate cake</h3>
                        <p>Description</p>
                        <button>Buy</button>
                    </article>
                </div>
            </section>


            <section className='coffee'>
                <h2>Coffee Menu</h2>
                <div className='box-coffee'>
                    <article>
                        <img src="https://img.freepik.com/foto-gratis/splash-cafe-granos-cafe-sobre-fondo-blanco_125540-3366.jpg?w=740&t=st=1707861165~exp=1707861765~hmac=8e525253f709df2771dab6bac78c7e2afa1952abd323ff9358154bb8ccf0d99e" alt="" />
                    </article>
                    <article className='info'>
                        <h3>We welcomes you!</h3>
                        <h4>Come of the best cup of coffee</h4>
                        <p>Vel commodi vitae 33 ullam voluptatibus ut ipsa iure. Ut dolores nihil 33 repudiandae possimus aut aperiam distinctio et ipsum recusandae et dicta veritatis sit suscipit quae. Aut mollitia iusto qui natus excepturi qui libero exercitationem in Quis quae non nisi earum. Qui ipsum iure et nostrum voluptatem ut excepturi quas ut ipsa itaque et optio laudantium.</p>
                        <div className='btn'>
                            <button>Read more</button>
                            <button>Buy</button>
                        </div>
                    </article>
                </div>
            </section>



          <footer className='footer'>

            <ul>
                <h4>SITEMAP</h4>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <ul>
                <h4>SOCIAL MEDIA</h4>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">TikTok</a></li>
            </ul>

            <ul>
                <h4>HELP</h4>
                <li><a href="">Getting started</a></li>
                <li><a href="">Referral program</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            




          </footer>









        </div>
    )
}

export default Page