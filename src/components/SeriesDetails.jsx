import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './SwiperNavButton';

const SeriesDetails = ({ show, img, y, name, ename, kargardan, like, imdb, zhanr, kholase, time, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7, swiper8 }) => {
  return (
    <section className={`${show !== y ? 'hidden' : 'flex'} w-full h-full bg-inherit flex`}>
      <div className='w-full h-[85%] relative flex justify-center items-center'>
        <figure className='absolute w-full h-full flex justify-center items-center'>
          <img src={img} alt={name} className='md:w-full md:h-full h-full' />
        </figure>
        <div className='absolute w-full h-full flex flex-wrap justify-center content-center bg-[#00000098]'>
          <h2 className='w-full mt-2 h-[50px] flex items-center justify-start text-white  text-[25px] tracking-wide ps-16'>{name}</h2>
          <h3 className='w-full h-[50px] flex items-center justify-start text-[#bbb5b5]  text-[10px] tracking-wide ps-16'>{ename}</h3>
          <h3 className='w-full h-[50px] flex items-center justify-start text-[#bbb5b5]  text-[15px] tracking-wide ps-16'>کارگردان: {kargardan}</h3>
          <div className='w-full h-[50px] flex items-center justify-start ps-16'>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <div className='text-[#1cb561] text-[12px] mx-1 '>{like}</div>
            </span>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <div className='text-[#ecdf52] text-[12px] '>{imdb}</div>
            </span>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <div className='text-white text-[13px] mx-1  tracking-wider'>{zhanr}</div>
            </span>
          </div>
          <p className='w-full h-[50px] flex items-center justify-start text-white  text-[12px] md:text-[15px] tracking-wide ps-16'>{kholase}</p>

          {/* Swiper for Episodes */}
          <div className='w-[85%] h-[200px] flex items-center'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: false }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
              className="mySwiper flex items-center justify-center relative mb-5"
            >
              {[swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7, swiper8].map((swiper, index) => (
                <SwiperSlide key={index} className='relative'>
                  <img src={swiper} alt={`Episode ${index + 1}`} className='blur-sm' />
                  <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>
                  <div className='absolute bottom-1 right-3 z-10 text-white  text-[16px]'>
                    {`فصل 1 قسمت ${index + 1}`}
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButton />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesDetails;
