import React, { useEffect, useState } from 'react'


export let slides = [
    {
        "id": 1,
        "title": "Summer Season",
        "subtitle": "Healthy Diet",
        "product": "Strawberry fields",
        "description": "We are having huge colection of Healthy juices for everyone.",
        "button": "Buy now",
        "img": "https://img.freepik.com/foto-gratis/batido-fresa-platano-fresco-tarro-aislado-sobre-fondo-blanco_123827-20726.jpg?w=360&t=st=1707858790~exp=1707859390~hmac=bd651134244289352c25e0a888b5436fd5dcb9c904e8e2fea1321254d3885360",
        "alt": "Strawberry"
    },
    {
        "id": 2,
        "title": "Winter Season",
        "subtitle": "Healthy Diet",
        "product": "Chocolate fields",
        "description": "We are having huge colection of Healthy juices for everyone.",
        "button": "Buy now",
        "img": "https://img.freepik.com/fotos-premium/leche-chocolate-o-bebida-cacao-vertiendo-vaso_1004890-4364.jpg?w=360",
        "alt": "Strawberry"
    },
    {
        "id": 3,
        "title": "Spring Season",
        "subtitle": "Healthy Diet",
        "product": "Chocolate fields",
        "description": "We are having huge colection of Healthy juices for everyone.",
        "button": "Buy now",
        "img": "https://img.freepik.com/foto-gratis/delicioso-batido-platano_144627-27496.jpg?w=360&t=st=1708376419~exp=1708377019~hmac=e2149493a3fca734fef6082163a4175579a9e6c3bdd48594be497d2f5d832005",
        "alt": "Strawberry"
    },
];


function Page() {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 2000); // Cambiar de slide cada segundo

        return () => clearInterval(intervalId);
    }, [currentIndex]); // Reiniciar el temporizador cuando cambia currentIndex

    function goToNextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
        updateSlider(nextIndex);
    }

    function handleButtonClick(index) {
        setCurrentIndex(index);
        updateSlider(index);
    }

    function updateSlider(index) {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

 



    return (
        <div className='container'>
            <div className="slider-container">
                <div className="slider">
                    {slides.map((key) =>
                        <section className="slide" key={key.id}>
                            <article>
                                <h2>{key.title}</h2>
                                <h3>{key.subtitle}</h3>
                                <h4>{key.product}</h4>
                                <p>{key.description}</p>
                                <button>{key.button}</button>
                            </article>
                            <article>
                                <img src={key.img} alt={key.alt} />
                            </article>
                        </section>
                    )}
                </div>
            </div>
            <section className="controls">
                {slides.map((slide, index) =>
                    <button
                        key={slide.id}
                        onClick={() => handleButtonClick(index)}
                        style={{ backgroundColor: currentIndex === index ? 'green' : '' }}
                    >
                    </button>
                )}
            </section>
        </div>
    )
}

export default Page