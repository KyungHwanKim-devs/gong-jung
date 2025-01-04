"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NextButton from "./_components/next-button";
import PrevButton from "./_components/prev-button";

const Carousel = ({ contentArr, ...props }: any) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, A11y]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 12,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 12,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: props.slidesPerView || 2,
          spaceBetween: 12,
        },
      }}
      navigation
      loop
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{
        hide: true,
      }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      <PrevButton />

      {contentArr.map((content: any, index: number) => (
        <SwiperSlide key={index}>
          <div className="rounded-lg">
            <img className="m-auto" src={content} alt={content} />
          </div>
        </SwiperSlide>
      ))}

      <NextButton />
    </Swiper>
  );
};

export default Carousel;
