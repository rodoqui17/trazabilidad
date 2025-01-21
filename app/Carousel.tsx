import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const videos = [
    { title: 'Top 1 : Introducción a Web3', description: 'La transición hacia la internet descentralizada.' },
    { title: 'Top 2 : Criptoactivos y Criptomonedas', description: 'Descubre los conceptos de criptomonedas y criptoactivos.' },
    { title: 'Top 3 : Blockchain para Principiantes', description: 'Una introducción al concepto de Blockchain.' },
    { title: 'Top 4 : Seguridad en Web3', description: 'Desafíos y estrategias de seguridad en Web3.' },
    { title: 'Top 5 : Avances en Blockchain', description: 'Los últimos avances y tendencias en Blockchain.' },
  ];

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="relative bg-black text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Top 10 más vistos</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
            
            <h3 className="text-xl font-bold">{video.title}</h3>
            <p className="text-gray-300">{video.description}</p>
            
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
