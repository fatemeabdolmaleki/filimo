import React from 'react'
import { useSwiper } from 'swiper/react'

const SwiperNavButton = () => {
    const swiper = useSwiper();
    return (
        <div className='w-full flex items-center justify-between absolute bottom-[36%] z-[900]'>
            <button onClick={() => swiper.slidePrev()} className=' w-[40px] h-[40px] bg-[#000000b5] text-white rounded-[50%] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            <button onClick={() => swiper.slideNext()} className=' w-[40px] h-[40px] bg-[#000000b5] text-white rounded-[50%] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </button>
        </div>
    )
}

export default SwiperNavButton