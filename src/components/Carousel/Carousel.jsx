// import "components/Carousel/Carousel.css";
// import { useState } from "react";
// const Carousel = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const gotoPrevious = () =>{
//     const isFirstSlide = currentIndex === 0;
//     const newIndex =  isFirstSlide ? slides.length-1 : currentIndex -1 ;
//     setCurrentIndex(newIndex);

//   }

//   const gotoNext = () =>{
//     const isLastIndex = currentIndex === slides.length-1;
//     const newIndex = isLastIndex ? 0 : currentIndex +1;
//     setCurrentIndex(newIndex);
    
//   }


//   return (
//     <div className="carousel">
//       <button className="crousel-button left" onClick={gotoPrevious}> &#10094;</button>


//       <div className="carousel-slides">
//         {slides.map((item,index) =>(
//           <div
//          className={`carousel-slide ${
//                index === currentIndex ? 'active' : ''
//              }`}
//              key={index}
//            >
//              <img src={slides[currentIndex].img} alt={`Slide ${index + 1}`} />
//            </div>          
//         ))}
//       </div>
//       <button className="crousel-right right" onClick={gotoNext}> &#10095;</button>
//     </div>
//   );
// };

// export default Carousel;


import { useState, useEffect } from "react";
import "components/Carousel/Carousel.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{
      setCurrentIndex((prevIndex) => (prevIndex === slides.length-1  ? 0 : prevIndex+1));
    },3000)
    return () => clearInterval(interval);
  },[slides.length]);

  const gotoPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const gotoSlide = (index) =>{
    setCurrentIndex(index);
  }

  return (
    <div className="container">
    <div className="carousel">
      <button className="carousel-button left" onClick={gotoPrevious}>
        &#10094;
      </button>

      <div className="carousel-slides">
        <div className="carousel-slide active">
          <img src={slides[currentIndex].img} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>

      <button className="carousel-button right" onClick={gotoNext}>
        &#10095;
      </button>
    </div>
    <div className="dots">
      {slides.map((item,index) => (
        <div key={index} onClick={() => gotoSlide(index)}  
        className={currentIndex === index ? "active" : ""}>&#x2022;</div>

      ))}
    </div>
    </div>
  );
};

export default Carousel;

































// import React, { useState } from 'react';
// import './Carousel.css';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <button className="carousel-button prev" onClick={prevSlide}>
//         &#10094;
//       </button>

//       <div className="carousel-slides">
//         {images.map((image, index) => (
//           <div
//             className={`carousel-slide ${
//               index === currentIndex ? 'active' : ''
//             }`}
//             key={index}
//           >
//             <img src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       <button className="carousel-button next" onClick={nextSlide}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
