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
                    <div className="slide">


                        <article>
                            <h2>Summer Season</h2>
                            <h3>Healthy Diet</h3>
                            <h4>Strawberry fields</h4>
                            <p>Description</p>
                            <button>Buy</button>

                        </article>

                        <article>
                           <img src="" alt="" />
                        </article>
                    
                    </div>
                   
                </div>
                <div className="controls">
                    <button  onClick={prevSlide}><p>{"<"}</p></button>
                    <button onClick={nextSlide}><p>{">"}</p></button>
                </div>
            </div>

        </div>
    )
}

export default Page