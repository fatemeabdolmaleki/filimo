import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './SwiperNavButton';


const Raygan = () => {
    return (
        <section className='w-full  h-[300px] flex flex-wrap justify-center items-center mt-24'>
            <h2 className='w-full h-[50px] flex items-center justify-start ps-28 text-white  text-[25px]'>فیلم های رایگان</h2>
            <div className='w-[85%]  h-[200px] flex items-center'>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: false,
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper flex items-center justify-center relative"
                >
                    <SwiperSlide>
                        <img src="/ra1.jpg" alt="" className='' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra2.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra3.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra4.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra5.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra6.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra7.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra8.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra9.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="/ra10.jpg" alt="" className='' />

                    </SwiperSlide>
                    <SwiperNavButton />

                </Swiper>


            </div>
        </section>
    )
}

export default Raygan