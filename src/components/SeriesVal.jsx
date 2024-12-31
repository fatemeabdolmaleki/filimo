import React from 'react';

const SeriesVal = ({ img, focus, focusn, x }) => {
  return (
    <div className='w-[200px] h-[250px] rounded-[15px] mx-5 mb-4'>
      <img
        onClick={focus}
        src={img}
        alt="Series"
        className={`${focusn === x ? 'scale-[1] border' : 'scale-[.8]'} cursor-pointer duration-500 object-cover w-full h-full rounded-[15px]`}
      />
    </div>
  );
};

export default SeriesVal;
