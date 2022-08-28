import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductOverview from './ProductOverview';

const ListProductOverviews = () => {
  return (
    <div className="mt-12 flex w-full justify-center">
      <div className="mx-10 flex h-full w-full max-w-[1280px] flex-col items-center">
        <h2 className="mb-4 text-center uppercase">sản phẩm nổi bật</h2>
        <div className="m-auto h-[2px] w-12 bg-amber-900"></div>
        <Swiper
          className="group mt-2 w-full !p-5"
          slidesPerView={5}
          navigation={{
            nextEl: '.next-product-arrow',
            prevEl: '.prev-product-arrow',
          }}
          modules={[Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <SwiperSlide>
            <ProductOverview />
          </SwiperSlide>
          <div className="next-product-arrow hover-animation absolute top-1/2 right-8 z-10 hidden h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-2 border-white hover:border-amber-800 hover:bg-amber-800 group-hover:flex">
            <FiChevronRight color="white" size={28} />
          </div>
          <div className="next-product-arrow hover-animation absolute top-1/2 left-8 z-10 hidden h-10  w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border-2 border-white hover:border-amber-800 hover:bg-amber-800 group-hover:flex">
            <FiChevronLeft color="white" size={28} />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ListProductOverviews;
