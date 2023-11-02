import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/navbar/Navbar';
import Card from '../components/cards/Card';
import Footer from '../components/footer/Footer';
import Api from '../service/ApiAsmaulhusna';
import Surah from '../service/ApiSurah';

const HomePage = () => {

  const menuData = [
    { name: 'Asmaul Husna', imgPath: 'src/assets/img/asmaul husna.png', router: '/asmaulhusna' },
    { name: 'Quran', imgPath: 'src/assets/img/quran.jpeg', router: '/quran' },
    { name: 'Juz', imgPath: 'src/assets/img/quran.png', router: '/juz' },
    { name: 'Shalat', imgPath: 'src/assets/img/shalat.jpeg', router: '/shalat' },
    { name: 'Hadist', imgPath: 'src/assets/img/hadist.png', router: '/hadist' },
    { name: 'Doa', imgPath: 'src/assets/img/doa.jpeg', router: '/doa' },

  ];

 




  return (

    <div className='w-full min-h-screen'>
      <Navbar />
      <Api/>
      <Surah/>
      <div className='w-full pt-[6rem] h-32'>
        <div className='w-[90%] mx-auto'>
          <div className="flex flex-wrap items-center justify-center ">
            {menuData.map((menu, index) => (
              <Card key={index} menu={menu.name} img={menu.imgPath} routing={menu.router} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>);
};

export default HomePage;
