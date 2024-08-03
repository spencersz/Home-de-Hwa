import React from "react";
import Slider from "react-slick";
import './ImageCarousel.scss';
import carousel1 from '../assets/images/carousel/carousel1.jpg';
import carousel2 from '../assets/images/carousel/carousel2.jpg';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={carousel1} alt='image' className='carouselImage'/>
      </div>
      <div>
      <img src={carousel2} alt='image' className='carouselImage'/>
      </div>
    </Slider>
  );
}




















// import React, {useState, useEffect} from 'react';

// const ImageCarousel = () => {
//     const images = ['1', '2','3','4']
//     const [currentIndex, setIndex] = useState(0);
//     const carouselScroll = () => {
//         if(currentIndex === images.length-1){
//             return setIndex(0);
//         }
//         return setIndex(currentIndex+1);
//     };
//     useEffect(() => {
//         const interval = setInterval(() => {carouselScroll()}, 3000)
//         return () => clearInterval(interval)}, [])
//     return (
//         <div id='ImageCarousel'>
//             {images.map((element, index) => {
//                 return <h1 className = 'carousel-item' 
//                 style = {{transform: `translate(-${currentIndex * 100} %)`}}
//                 key = {index}>
//                     {element}
//                 </h1>
//             })
//             }
//         </div>
//     )
// }

// export default ImageCarousel;


//https://blog.bitsrc.io/simple-carousel-in-react-2aac73887243