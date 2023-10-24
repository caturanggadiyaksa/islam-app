import React from 'react';
import NavbarQuran from '../components/navbar/qurannav/NavbarQuran';
import QuranContainer from '../containers/QuranContainer';


const QuranPage = () => {
  return(
    <div>
      <NavbarQuran/>

      <div className='pt-[6rem]'> 
        <QuranContainer/>
      </div>
    </div>
  );
};

export default QuranPage;
