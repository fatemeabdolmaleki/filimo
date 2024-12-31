import React, { useState } from 'react';
import Series from './Series';
import Film from './Film';

const PopularMovie = () => {
  const [toggle, setToggle] = useState(1);

  const show = (index) => {
    setToggle(index);
  };

  return (
    <section className='w-full flex flex-wrap content-start'>
      <div className='h-[100px] w-full flex items-center'>
        <h2 className='text-white  h-full flex items-center justify-end w-[300px] text-[25px] tracking-wide'>
          محبوب‌ترین‌های فیلیمو
        </h2>
        <div className='flex mx-5 w-[130px] h-[30px] bg-[#151515] rounded-[25px] border-[.5px] border-gray-600 justify-center items-center'>
          <div
            onClick={() => show(1)}
            className={`${
              toggle === 1 ? 'bg-[#1cb561]' : 'bg-inherit'
            } cursor-pointer w-[62px] h-[25px] mx-[5px] flex justify-center items-center text-white  text-[15px] rounded-[15px]`}
          >
            سریال
          </div>
          <div
            onClick={() => show(2)}
            className={`${
              toggle === 2 ? 'bg-[#1cb561]' : 'bg-inherit'
            } cursor-pointer w-[62px] h-[25px] mx-[5px] flex justify-center items-center text-white  text-[15px] rounded-[15px]`}
          >
            فیلم
          </div>
        </div>
      </div>
      <Series status={toggle} />
      <Film status={toggle} />
    </section>
  );
};

export default PopularMovie;
