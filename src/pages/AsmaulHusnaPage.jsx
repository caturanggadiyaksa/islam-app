import React from 'react';
import AsmaulHusna from '../components/navbar/AsmaulHusna';
import AsmaulHusnaCard from '../components/cards/AsmaulHusnaCard';

const AsmaulHusnaPage = () => {
  return(
    <div>
      <AsmaulHusna/>

      <div className='pt-[6rem] w-full'>
        <div className='w-[80%] mx-auto'>

          <div className="w-full">
            <div className='flex justify-center items-center'>
              <AsmaulHusnaCard/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AsmaulHusnaPage;
