import React, { useState } from 'react';
import SeriesVal from './SeriesVal';
import SeriesDetails from './SeriesDetails';

const Series = ({ status }) => {
  const [focusedIndex, setFocusedIndex] = useState(1);

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
   <>
    <section className={`${status === 2 ? 'hidden' : 'flex'} w-full h-[290px] items-center bg-inherit flex overflow-x-scroll md:overflow-auto`}>
      <div className='flex w-[1400px] md:w-full h-full justify-center items-center'>
        <SeriesVal img={'/zakhm.jpg'} focus={() => handleFocus(1)} focusn={focusedIndex} x={1} />
        <SeriesVal img={'/sham.jpg'} focus={() => handleFocus(2)} focusn={focusedIndex} x={2} />
        <SeriesVal img={'/joker.jpg'} focus={() => handleFocus(3)} focusn={focusedIndex} x={3} />
        <SeriesVal img={'/aknun.jpg'} focus={() => handleFocus(4)} focusn={focusedIndex} x={4} />
        <SeriesVal img={'/lala.jpg'} focus={() => handleFocus(5)} focusn={focusedIndex} x={5} />
        <SeriesVal img={'/masti.jpg'} focus={() => handleFocus(6)} focusn={focusedIndex} x={6} />
      </div>
    </section>

    {/* Series Details Section */}
    <section className={`${status === 2 ? 'hidden' : 'flex'} flex bg-inherit w-full h-[550px]`}>
      <SeriesDetails
        img={'/2.jpeg'}
        show={focusedIndex}
        y={1}
        name="زخم کاری"
        ename="zakhm kari"
        kargardan="محمدحسین مهدویان"
        like="88%"
        imdb="7.2"
        zhanr="درام"
        kholase="مالک در جستجوی زنی است که پدر سیما را به جشن عروسی آورده. او سیما را به جای خود با تیمی از شرکایش به نروژ می فرستد. در نروژ اما مذاکره به مشکل می خورد. مالک در تلاش است از طریق سیما و باقی شرکا مشکل را حل کند اما…"
        time="۴ فصل و ۴۸ قسمت"
        swiper1={'/z1.jpg'} swiper2={'/z2.jpg'} swiper3={'/z3.jpg'} swiper4={'/z4.jpg'} swiper5={'/z5.jpg'} swiper6={'/z6.jpg'} swiper7={'/z7.jpg'} swiper8={'/z8.jpg'}
      />
      <SeriesDetails
        img={'/6.jpeg'}
        show={focusedIndex}
        y={2}
        name="شام ایرانی"
        ename="sham irani"
        kargardan="سعید ابوطالب"
        like="88%"
        imdb="3.2"
        zhanr="خانوادگی"
        kholase="شام ایرانی به خانه یکی از داوودنژادها رسید. واله داوودنژاد میهمانانش را به شام بی نظیری دعوت کرد که همه اجزایش را خودش به تنهایی درست کرده است. حالا نوبت صحرا اسداللهی و السا فیروز آذر و متین ستوده است که به او امتیاز بدهند. داورها هنوز سخت گیرند...."
        time="محصول ایران - ۱۴۰۳ - کیفیت HD"
        swiper1={'/sh1.jpg'} swiper2={'/sh2.jpg'} swiper3={'/sh3.jpg'} swiper4={'/sh4.jpg'} swiper5={'/sh1.jpg'} swiper6={'/sh2.jpg'} swiper7={'/sh3.jpg'} swiper8={'/sh4.jpg'}
      />
      <SeriesDetails
        img={'/3.jpeg'}
        show={focusedIndex}
        y={3}
        name="جوکر"
        ename="joker2"
        kargardan="احسان علیخانی"
        like="78%"
        imdb="5.2"
        zhanr="کمدی"
        kholase="یه قسمت پر از اتفاقات عجیب و غریب که توش رژیم های غذایی نعیمه رو محاکمه می کنن، مریم سعادت فال می گیره و غول چراغ جادو ظاهر میشه…"
        time="محصول ایران - ۱۴۰۳"
        swiper1={'/j1.jpg'} swiper2={'/j2.jpg'} swiper3={'/j3.jpg'} swiper4={'/j4.jpg'} swiper5={'/j5.jpg'} swiper6={'/j1.jpg'} swiper7={'/j2.jpg'} swiper8={'/j3.jpg'}
      />
      <SeriesDetails
        img={'/5.jpeg'}
        show={focusedIndex}
        y={4}
        name="اکنون.."
        ename="Aknun"
        kargardan="محمدرضا رضائیان"
        like="70%"
        imdb="5.2"
        zhanr="تاک شو"
        kholase="در پنجمین قسمت از برنامه «اکنون...»، پیمان قاسم خانی مهمان برنامه است. او که با فیلم هایش بارها لحظات را به کام ما شیرین کرده، اکنون با سروش صحت از زندگی، هنر و عشق می گوید."
        time="محصول ایران - ۱۴۰۳"
        swiper1={'/a1.jpg'} swiper2={'/a2.jpg'} swiper3={'/a3.jpg'} swiper4={'/a4.jpg'} swiper5={'/a5.jpg'} swiper6={'/a1.jpg'} swiper7={'/a2.jpg'} swiper8={'/a3.jpg'}
      />
      <SeriesDetails
        img={'/bgl.jpg'}
        show={focusedIndex}
        y={5}
        name="لالایی"
        ename="lalaei"
        kargardan="احمد درویشعلی پور"
        like="75%"
        imdb="6.2"
        zhanr="خانوادگی"
        kholase="جهانگیر با به دست آوردن دفترچه قصد دارد با بر ملا کردن نقش پاداش، گلشن را در جریان اتفاقات پیش آمده قرار دهد و نقشه هایی را که در سر دارد عملی کند."
        time="محصول ایران - ۱۴۰۳"
        swiper1={'/l1.jpg'} swiper2={'/l2.jpg'} swiper3={'/l3.jpg'} swiper4={'/l4.jpg'} swiper5={'/l5.jpg'} swiper6={'/l6.jpg'} swiper7={'/l7.jpg'} swiper8={'/l8.jpg'}
      />
      <SeriesDetails
        img={'/bgm.jpg'}
        show={focusedIndex}
        y={6}
        name="ممیزی"
        ename="Momayezi"
        kargardan="حامد جوادزاده"
        like="62%"
        imdb="5.2"
        zhanr="کمدی"
        kholase="همدیگه رو جاج نکنین!"
        time="محصول ایران - ۱۳۹۸"
        swiper1={'/m1.jpg'} swiper2={'/m2.jpg'} swiper3={'/m3.jpg'} swiper4={'/m4.jpg'} swiper5={'/m5.jpg'} swiper6={'/m6.jpg'} swiper7={'/m7.jpg'} swiper8={'/m8.jpg'}
      />
      
    </section>
   </>
  );
};

export default Series;
