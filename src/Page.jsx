import React from 'react'

function Page() {

    let currentIndex = 0;

    function prevSlide() {
        const slides = document.querySelectorAll('.slide');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }



    return (
        <div className='container'>
            <div className="slider-container">
                <div className="slider">
                    <section className="slide">
                        <article>
                            <h2>Summer Season</h2>
                            <h3>Healthy Diet</h3>
                            <h4>Strawberry fields</h4>
                            <p>We are having huge colection of Healthy juices for everyone.</p>
                            <button>Buy now</button>
                        </article>
                        <article>
                            <img src="https://img.freepik.com/foto-gratis/batido-fresa-platano-fresco-tarro-aislado-sobre-fondo-blanco_123827-20726.jpg?w=360&t=st=1707858790~exp=1707859390~hmac=bd651134244289352c25e0a888b5436fd5dcb9c904e8e2fea1321254d3885360" alt="" />
                        </article>
                    </section>
                    <section className="slide">
                        <article>
                            <h2>Winter Season</h2>
                            <h3>Healthy Diet</h3>
                            <h4>Chocolate fields</h4>
                            <p>Description ...</p>
                            <button>Buy</button>
                        </article>
                        <article>
                            <img src="https://img.freepik.com/fotos-premium/leche-chocolate-o-bebida-cacao-vertiendo-vaso_1004890-4364.jpg?w=360" alt="" />
                        </article>
                    </section>
                    <section className="slide">
                        <article>
                            <h2>Spring Season</h2>
                            <h3>Healthy Diet</h3>
                            <h4>Strawberry fields</h4>
                            <p>Description ...</p>
                            <button>Buy</button>
                        </article>
                        <article>
                            <img src="https://img.freepik.com/foto-gratis/delicioso-batido-platano_144627-27496.jpg?w=360&t=st=1708376419~exp=1708377019~hmac=e2149493a3fca734fef6082163a4175579a9e6c3bdd48594be497d2f5d832005" alt="" />
                        </article>
                    </section>
                </div>
                <section className="controls">
                    <button onClick={prevSlide}><p>{"<"}</p></button>
                    <button onClick={nextSlide}><p>{">"}</p></button>
                </section>
            </div>

        </div>
    )
}

export default Page