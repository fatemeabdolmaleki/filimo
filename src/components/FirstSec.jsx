import React, { useState, useEffect } from 'react';

const FirstSec = () => {
    const images = [
        '/1.jpeg',
        '/2.jpeg',
        '/3.jpeg',
        '/4.jpeg',
        '/5.jpeg',
        '/6.jpeg',
    ];

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="w-full h-[600px] overflow-hidden relative">
            <section className="h-[550px] w-full absolute left-0 top-[55px]">
                <figure className="relative">
                    <img
                        src={images[activeImageIndex]}
                        alt={`Slide ${activeImageIndex + 1}`}
                        className="absolute top-0 left-0 w-full h-[500px] object-fill"
                    />
                </figure>
                <div className="absolute top-0 left-0 bg-[#00000098] w-full h-[91%] flex justify-center items-end">
                    <div className='w-full  h-[90%] flex flex-wrap content-center justify-center'>
                        <p className=' w-full h-[70px] tracking-normal text-orange-400  flex items-center justify-center text-[20px]'>با فیلیمو بی وقفه فیلم ببین</p>
                        <h2 className=' w-full h-[80px] tracking-normal flex justify-center items-center  text-white text-[45px] font-bold'>کنترل همیشه دست توست!</h2>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-normal  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>نود و پنج هزار اپیزود فیلم و سریال برای تماشا داری</h3>
                        </div>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-normal  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>می تونی دانلود کنی بعد بدون اینترنت تماشا کنی</h3>
                        </div>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-normal  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>می تونی یک عضو , مخصوص تماشای کودک بسازی</h3>
                        </div>

                        <button className='h-[55px] w-[260px] duration-500 hover:bg-[#367b55] mx3 rounded-[8px] bg-[#1cb561] flex justify-center items-center '>
                            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                            <div className='text-[21px] text-white mx-2  tracking-normal'> خرید اشتراک و تماشا</div>

                        </button>
                        <div className='w-full flex justify-center items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-gift-fill" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                            </svg>
                            <p className='mt-3  tracking-normal text-[#bbb5b5] text-[13px] mx-2 flex justify-center items-center'>تخفیف ویژه برای کاربران جدید</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default FirstSec;