import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CarruselSwiper = () => {
  const imagenes = [
    "/Clinica_Estetica/home.jpg",
    "/Clinica_Estetica/home.jpg",
    "/Clinica_Estetica/home.jpg",
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-2xs sm:h-[400px] sm:w-3xl  md:h-[500px]"
    >
      {imagenes.map((img, index) => (
        <SwiperSlide key={index} className="w-full h-full mt-4">
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselSwiper;
