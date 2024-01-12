// import React from "react";
// import { DonutsItem } from "./DonutsItem/DonutsItem";
// import { data } from "./data";
// import { Wraper, Title, List } from "./Donuts.styled";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const Donuts = () => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     adaptiveHeight: true,
//     speed: 700,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Wraper>
//       <Title>Bestsellers</Title>
//       <List>
//         <Slider {...settings}>
//           {data.map((donuts, i) => {
//             return <DonutsItem key={i} {...donuts} />;
//           })}
//         </Slider>
//       </List>
//     </Wraper>
//   );
// };

// Donuts.js

import React from 'react';
import { Keyboard, Pagination } from 'swiper/modules';
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Wraper, Title } from './Donuts.styled';
import { DonutsItem } from './DonutsItem/DonutsItem';
import { data } from './data';

export const Donuts = () => {
  return (
    <Wraper>
      <Title>Bestsellers</Title>

      <Swiper
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}

        //!autoplay --------------------
        // slidesPerView={3}
        // autoplay={{
        //   delay: 2000,
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
