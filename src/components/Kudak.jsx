import React from 'react'

function Kudak() {
    return (
        <>
            <section className='w-full h-[370px]  bg-[#132a32] flex flex-wrap relative mt-28'>
                <figure className='w-full md:w-[50%] flex flex-wrap  h-full items-center justify-end relative'>
                    <img src="/bg-kids.png" alt="" className='w-[60%] h-[90%] absolute bottom-0' />

                </figure>

                <article className='w-full md:w-[50%] flex flex-wrap  h-full justify-center items-center'>
                    <div className='w-full h-[70%]  flex flex-wrap content-center'>
                        <h2 className='flex  items-center justify-start ps-12 text-white  text-[25px] tracking-wider w-full h-[50px]'>دنیایی متنوع از فیلم و کارتون‌های کودکانه</h2>
                        <p className='flex flex-wrap  items-center justify-start ps-12 text-gray-500  text-[15px] tracking-wider w-[500px] h-[90px]'>ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</p>
                        <div className='w-full flex ps-12 items-center justify-start h-[60px] '>
                            <button className='mx-2 h-[40px] bg-white rounded-md w-[125px] flex justify-center items-center text-black  text-[13px] tracking-wider'>فیلیمو کودک بساز</button>
                            <button className='mx-2 h-[40px] bg-white rounded-md w-[125px] flex justify-center items-center text-black  text-[13px] tracking-wider'>تماشای فیلیمو کودک</button>
                        </div>
                    </div>
                </article>

            </section>

        </>

    )
}

export default Kudak