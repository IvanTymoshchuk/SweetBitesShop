import React from 'react';
import { Pagination } from 'swiper/modules';
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Wraper } from './Donuts.styled';
import { DonutsItem } from './DonutsItem/DonutsItem';
import { data } from './data';
import { Titles } from './../Title/Title';

export const Donuts = () => {
  return (
    <Wraper>
      <Titles text="Bestsellers" />

      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}

        //!autoplay --------------------
        // slidesPerView={1}
        // autoplay={{
        //   delay: 2000,
        // }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        // }}
        // modules={[Autoplay]}
        //!-------------------
      >
        {data.map((donuts, i) => (
          <SwiperSlide key={i}>
            <DonutsItem key={i} {...donuts} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wraper>
  );
};

export default Donuts;
