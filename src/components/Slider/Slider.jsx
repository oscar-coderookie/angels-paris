import React from 'react';
import Slider from "react-slick";

const galeriaDeImagenes = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    // Añade más URL de imágenes según sea necesario
  ];

const SliderComponent = () => {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings} >
            {galeriaDeImagenes.map((index,element)=>{
                return(
                    <div key={index} className="image__container">
                        <img src={element} alt={element} />
                        <h3></h3>
                    </div>
                )
            })}
        </Slider>
    </div>
  )
}

export default SliderComponent