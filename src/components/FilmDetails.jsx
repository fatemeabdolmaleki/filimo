import React from 'react';

const FilmDetails = ({
  show, img, y, name, ename, kargardan, like, imdb, zhanr, kholase, time
}) => {
  return (
    <section className={`${show !== y ? 'hidden' : 'flex'} w-full h-full bg-inherit flex`}>
      <div className='w-full h-[85%] relative flex justify-center items-center'>
        <figure className='absolute w-full h-full flex justify-center items-center'>
          <img src={img} alt={name} className='md:w-full md:h-full h-full' />
        </figure>
        <div className='absolute w-full h-full flex flex-wrap justify-center content-center bg-[#00000098]'>
          <h2 className='w-full h-[50px] flex items-center justify-start text-white  text-[25px] tracking-wide ps-16'>
            {name}
          </h2>
          <h3 className='w-full h-[50px] flex items-center justify-start text-[#bbb5b5]  text-[10px] tracking-wide ps-16'>
            {ename}
          </h3>
          <h3 className='w-full h-[50px] flex items-center justify-start text-[#bbb5b5]  text-[15px] tracking-wide ps-16'>
            کارگردان : {kargardan}
          </h3>
          <div className='w-full h-[50px] flex items-center justify-start ps-16'>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#1cb561" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
              <div className='text-[#1cb561] text-[12px] mx-1 '>{like}</div>
            </span>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <div className='text-[#ecdf52] text-[10px] mx-1 font-serif'>IMDB</div>
              <div className='text-[#ecdf52] text-[12px] '>{imdb}</div>
            </span>
            <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
              <div className='text-white text-[13px] mx-1  tracking-wider'>{zhanr}</div>
            </span>
          </div>
          <p className='w-full h-[50px] flex items-center justify-start text-white  text-[12px] md:text-[15px] tracking-wide ps-16'>{kholase}</p>

          <div className='w-full flex ps-16 justify-start items-center'>
            <button className='h-[45px] w-[275px] duration-500 hover:bg-[#367b55] mx3 rounded-[3px] bg-[#1cb561] flex justify-center items-center'>
              <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              </svg>
              <div className='text-[16px] text-white mx-2  tracking-wider'> خرید اشتراک و تماشا</div>
            </button>
          </div>

          <p className='w-full h-[50px] flex items-center justify-start text-[#bbb5b5]  text-[13px] tracking-wider ps-16'>{time}</p>
        </div>
      </div>
    </section>
  );
};

export default FilmDetails;
