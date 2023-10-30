import React, { useState, useEffect } from 'react';
import AsmaulHusna from '../components/navbar/AsmaulHusna';
import AsmaulHusnaCard from '../components/cards/AsmaulHusnaCard';
import Footer from '../components/footer/Footer';

const AsmaulHusnaPage = () => {


  const [asmaulHusnaData, setAsmaulHusnaData] = useState([]);

  useEffect(() => {

    const data = localStorage.getItem('asmaulhusnaData');
    if (data) {
      setAsmaulHusnaData(JSON.parse(data));
    }

  }, []);


  return (
    <div>
      <AsmaulHusna />

      <div className='pt-[6rem] w-full'>
        <div className='w-[80%] mx-auto'>

          <div className="w-full">
            <div className='flex flex-col justify-center items-center mb-[10rem]'>
              {asmaulHusnaData.map(item => (

                <AsmaulHusnaCard key={item.id} id={item.id_asmaulhusna} arab={item.arab} indo={item.indo} latin={item.latin} />

              ))}
            </div>

          </div>

        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AsmaulHusnaPage;
