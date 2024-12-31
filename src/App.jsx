import Accordion from './components/Accordion';
import Cinema from './components/Cinema';
import FirstSec from './components/FirstSec';
import Footer from './components/Footer';
import Header from './components/Header';
import Kudak from './components/Kudak';
import PopularMovie from './components/PopularMovie';
import Raygan from './components/Raygan';
import Tamash from './components/Tamash';
import Tamasha2 from './components/Tamasha2';

import './index.css'
export default function App() {
  return (
    <main className="bg-[#151515] w-full 2xl:container mx-auto overflow-x-hidden flex flex-wrap relative">
      <Header />
      <FirstSec />
      <PopularMovie />
      <div className='w-full flex flex-wrap h-[2000px] md:h-[1000px]'>
        <Tamash />
        <Tamasha2 />
      </div>
      <Raygan />
      <div className='w-full flex flex-wrap h-[2000px] md:h-[1120px]'>
        <Kudak />
        <Cinema/>
      </div>
      <Accordion/>
     <div className='w-full flex flex-wrap h-[700px] md:h-[500px] '>
     <Footer/>
     </div>
    </main>
  );
}