import React from 'react';

function Header() {
    return (
        <header className="bg-black w-full h-[55px] flex fixed left-0 top-0 mx-auto z-[1000]">
            <div className="h-full w-[60%] flex">
                <div className="mr-20 h-full w-[100px] flex items-center">
                    <figure>
                        <img src="/logo.png" alt="" className="w-[80px] h-[25px]" />
                    </figure>
                </div>

                <div className="h-full w-[50px] flex items-center">
                    <div className="bg-[#5c5a5a] h-[30px] w-[1px] mx-5"></div>
                </div>

                <div className="h-full w-[100px] hidden md:flex items-center">
                    <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" viewBox="0 0 16 16">
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                    </svg>
                    <a className="text-white text-[15px] flex items-center  mx-1 cursor-pointer hover:text-orange-400 duration-300">فیلیموتور</a>
                </div>

                <div className="h-full w-[130px] hidden md:flex items-center">
                    <figure>
                        <img src="/filimo.png" alt="" className="w-[20px] h-[20px] mx-2" />
                    </figure>
                    <a className="text-white text-[15px] flex items-center  cursor-pointer hover:text-orange-400 duration-300">فیلیمو مدرسه</a>
                </div>

                <div className="mr-5 h-full w-[100px] hidden md:flex items-center group">
                    <svg className="mx-1 cursor-pointer group-hover:fill-orange-400 duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <a className="text-white text-[15px] flex items-center  mx-2 cursor-pointer group-hover:text-orange-400 duration-300">جستجو</a>
                </div>
            </div>

            <div className="h-full w-[40%] flex justify-end">
                <div className="h-full md:w-[50%] flex justify-center items-center">
                    <button className="h-[40px] w-[120px] duration-500 hover:bg-[#367b55] rounded-[4px] bg-[#1cb561] flex justify-center items-center">
                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                        </svg>
                        <div className="text-[15px] text-white mx-2 ">خرید اشتراک</div>
                    </button>
                    <button className="h-[40px] w-[50px] duration-500 hover:bg-[#444343] mx-3 rounded-[4px] bg-[#292828] text-white flex justify-center items-center text-[15px] ">ورود</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
