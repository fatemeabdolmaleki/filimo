import React from 'react'

function Tamasha2() {
    return (
        <section className=' w-full h-[500px] flex flex-wrap'>
            <article className=' flex flex-wrap w-full md:w-[50%] h-full content-center justify-center'>
                <h2 className=' w-full h-[40px] flex items-center justify-center text-white text-[22px]  ps-12 tracking-wider'>چطور با تلویزیون، فیلیمو تماشا کنم؟</h2>
                <p className=' w-[60%] h-[140px] flex flex-wrap items-center justify-center text-[rgba(255,255,255,.75)] text-[15px]  ps-12 tracking-wider'>ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.</p>
                <div className=' mt-5 w-full h-[40px] flex items-center justify-center text-white text-[17px]  ps-12 tracking-wider'>
                    <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#bbb5b5" class="bi bi-tv" viewBox="0 0 16 16">
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                    </svg>
                    تلویزیون
                </div>
                <p className=' w-full h-[40px] flex items-start justify-center text-[#bbb5b5] text-[10px]  ps-16 tracking-wider'>Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung</p>
                <div className='mr-2 w-full h-[40px] flex items-center justify-center text-white text-[17px]  ps-12 tracking-wider'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#bbb5b5" class="bi bi-android" viewBox="0 0 16 16">
                        <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    موبایل و تبلت
                </div>
                <p className=' w-full h-[40px] flex items-start justify-center text-[#bbb5b5] text-[10px]  ps-16 tracking-wider'>NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom</p>

                <div className=' w-full flex ps-16 justify-center items-center'>
                    <button className='h-[40px] w-[240px] duration-500 hover:bg-[#9a9797] mx3 rounded-[6px] bg-[#606060] flex justify-center items-center '>

                        <div className='text-[13px] text-white mx-2  tracking-widest'>ویدیو های اموزشی تماشا با تلویزیون</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </div>

            </article>
            <figure className=' flex-wrap w-full md:w-[50%] h-full flex items-center justify-center md:justify-start'>
                <img src="/tamasha2.png" alt="" className='md:w-[90%] md:h-[90%] h-[80%] w-[80%]' />
            </figure>
        </section>
    )
}

export default Tamasha2