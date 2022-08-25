import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide1 from '@/public/assets/images/slide-1.png';
import Slide2 from '@/public/assets/images/slide-2.png';
import Slide3 from '@/public/assets/images/slide-3.png';

const CustomCarousel = () => {
  return (
    <div className="group relative h-[450px] w-full">
      <Swiper
        className="h-full"
        navigation={{ nextEl: '.next-arrow', prevEl: '.pre-arrow' }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide className="relative">
          <Image src={Slide1} alt="slide 1" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src={Slide2} alt="slide 2" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src={Slide3} alt="slide 3" layout="fill" objectFit="cover" />
        </SwiperSlide>
      </Swiper>
      <div className="next-arrow absolute top-1/2 right-5 z-10 hidden h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-2 border-white transition-all duration-200 ease-in hover:border-amber-800 hover:bg-amber-800 group-hover:flex">
        <FiChevronRight color="white" size={28} />
      </div>
      <div className="next-arrow absolute top-1/2 left-5 z-10 hidden h-10 w-10  translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-2 border-white transition-all duration-200 ease-in hover:border-amber-800 hover:bg-amber-800 group-hover:flex">
        <FiChevronLeft color="white" size={28} />
      </div>
    </div>
  );
};

export default CustomCarousel;
