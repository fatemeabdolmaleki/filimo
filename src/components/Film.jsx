import React, { useState } from 'react';
import FilmVal from './FilmVal';
import FilmDetails from './FilmDetails';

const Film = ({ status }) => {
  const [focusedIndex, setFocusedIndex] = useState(1);

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
    <>
      <section className={`${status === 1 ? 'hidden' : 'flex'} w-full h-[290px] items-center bg-inherit flex overflow-x-scroll md:overflow-auto`}>
        <div className='flex w-[1400px] md:w-full h-full justify-center items-center'>
          <FilmVal img={'/asb.jpg'} focus={() => handleFocus(1)} focusn={focusedIndex} x={1} />
          <FilmVal img={'/khorshid.jpg'} focus={() => handleFocus(2)} focusn={focusedIndex} x={2} />
          <FilmVal img={'/nilgun.jpg'} focus={() => handleFocus(3)} focusn={focusedIndex} x={3} />
          <FilmVal img={'/yadegar.jpg'} focus={() => handleFocus(4)} focusn={focusedIndex} x={4} />
          <FilmVal img={'/temsah.jpg'} focus={() => handleFocus(5)} focusn={focusedIndex} x={5} />
          <FilmVal img={'/bibadan.jpg'} focus={() => handleFocus(6)} focusn={focusedIndex} x={6} />
        </div>
      </section>

      {/* Film Details Section */}
      <section className={`${status === 1 ? 'hidden' : 'flex'} flex bg-inherit w-full h-[550px]`}>
        <FilmDetails
          img={'/bgasb.jpg'}
          show={focusedIndex}
          y={1}
          name="اسب سفید پادشاه"
          ename="asb sefid padeshah"
          kargardan="محمد حسین لطیفی"
          like="85%"
          imdb="6.8"
          zhanr="درام"
          kholase="فیلم اسب سفید پادشاه داستان دختر جوانی به نام مریم معروف به ماری است که پس از چند ماه از زندان آزاد می شود و در صدد یافتن نامزد خود و خروج از بحرانی است که در زندگی گرفتار آن شده است ...."
          time="یک ساعت و ۲۹ دقیقه - محصول ایران - ۱۳۹۴ - کیفیت HD"
        />
        <FilmDetails
          img={'/bgkhor.jpg'}
          show={focusedIndex}
          y={2}
          name=" خورشید آن ماه"
          ename="khorshid an mah"
          kargardan="ستاره اسکندری"
          like="70%"
          imdb="6.2"
          zhanr="درام"
          kholase="در جنوب شرقی استان سیستان و بلوچستان، یک بیوه بلوچ به نام بیبان تصمیم می گیرد سکوت کند و دیگر حرفی نزند. او با پسرش میران در خانه پدرشوهرش زندگی می کند. وقتی همبازی دوران کودکی او، همراز، به خانه برمی گردد، عشقی میانشان جان می گیرد؛ اما همه سعی می کنند بیبان را وادار کنند که این عشق ممنوعه را فراموش کند."
          time="بالای ۱۵ سال - یک ساعت و ۳۱ دقیقه - محصول ایران - ۱۳۹۹ - کیفیت HD"
        />
        <FilmDetails
          img={'/bgni.jpg'}
          show={focusedIndex}
          y={3}
          name="نیلگون"
          ename="Nilgun"
          kargardan="حسین سهیلی زاده"
          like="70%"
          imdb="5.5"
          zhanr="خانوادگی"
          kholase="نیلگون فیلمی به کارگردانی حسین سهیلی زاده، نویسندگی بابک کایدان و تهیه کنندگی ایرج محمدی محصول سال ۱۳۹۸ است."
          time="بالای ۱۵ سال - یک ساعت و ۲۶ دقیقه - محصول ایران - ۱۳۹۸ - کیفیت HD"
        />
        <FilmDetails
          img={'/bgya.jpg'}
          show={focusedIndex}
          y={4}
          name="یادگار جنوب"
          ename="yadegar jonub"
          kargardan=" حسین دوماری"
          like="50%"
          imdb="4.4"
          zhanr="عاشقانه"
          kholase="وحید، عشقش را در کالبد رعنا، زنی روسپی می جوید ..."
          time="بالای ۱۵ سال - یک ساعت و ۴۱ دقیقه - محصول ایران - ۱۴۰۱ - کیفیت HD"
        />
        <FilmDetails
          img={'/bgt.jpg'}
          show={focusedIndex}
          y={5}
          name="تمساح خونی"
          ename="Temsah khuni"
          kargardan="جواد عزتی"
          like="60%"
          imdb="5.2"
          zhanr="کمدی"
          kholase="من یه تمساحم، یه تمساح خونی ! یه آدم زخمی که کل زندگیش فقط باخته و چیزی برای از دست دادن نداره… ولی باز دلش ریسک های بزرگ می خواد!"
          time="بالای ۱۵ سال - یک ساعت و ۴۶ دقیقه - محصول ایران - ۱۴۰۳ - کیفیت HD"
        />
        <FilmDetails
          img={'/bgbi.jpg'}
          show={focusedIndex}
          y={6}
          name="بی بدن"
          ename="Bibadan"
          kargardan="مرتضی علیزاده"
          like="70%"
          imdb="5.7"
          zhanr="جنایی"
          kholase="سارا مقدم پس از گم شدن دخترش ارغوان، به دادسرا مراجعه می کند. موبایل ارغوان ردیابی می شود تا آخرین فردی که او را دیده مشخص شود. یافته ها از وقوع اتفاقاتی هولناک پرده بر می دارد."
          time="بالای ۱۵ سال - یک ساعت و ۵۱ دقیقه - محصول ایران - ۱۴۰۲ - کیفیت HD"
        />
      </section>
    </>
  );
};

export default Film;
