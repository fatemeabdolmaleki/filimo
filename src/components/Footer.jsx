import React from 'react'

const Footer = () => {
    return (
        <section className='w-full h-[500px]  green flex justify-center items-center'>
            <div className=' w-[85%] h-[85%] flex flex-wrap items-center content-center'>
                <h1 className='w-full flex justify-center items-center text-white  text-[85px] '>فیلیمو</h1>

                <div className='w-full flex flex-wrap justify-center'>
                    <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2  tracking-wide  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>
                            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</h3>
                    </div>
                    <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2  tracking-wide  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>هزاران انیمیشن و کارتون برای کودکان</h3>
                    </div>
                    <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2  tracking-wide  text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>پشتیبانی 24 ساعته برای راهنمایی شما</h3>
                    </div>

                    <button className='h-[55px] w-[260px] duration-500 hover:bg-[#367b55] mx3 rounded-[8px] bg-[#1cb561] flex justify-center items-center mt-3'>
                        <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                        </svg>
                        <div className='text-[21px] text-white mx-2  tracking-wider'> خرید اشتراک و تماشا</div>

                    </button>

                    <div className='w-full h-auto mt-20 flex flex-wrap justify-center *:mx-3 *:text-white *:text-[20px]'>
                        <a href="https://github.com/fatemeabdolmaleki"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/fateme-abdolmaleki/"><i class="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/fatemeabdolmaleki_"><i class="bi bi-instagram"></i></a>
                    </div>
                    <div className='mt-10 text-white '>
                        <h2>Coded With ❤️ By Fateme Abdolmaleki </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer