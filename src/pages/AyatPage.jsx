import React from 'react';
import { useParams } from 'react-router-dom';
import AyatNav from '../components/navbar/AyatNav';
import ApiAyats from '../service/ApiAyats';
import AyatCard from '../components/cards/AyatCard';


const AyatPage = () => {

  const { ayatNumber } = useParams();

  const [ayatsData, setAyatsData] = useState([]);

  useEffect(() => {

    const data = localStorage.getItem('ayatsData');
    if (data) {
      setAyatsData(JSON.parse(data));
    }

  }, []);

  return (
    <>
      <div>
        <ApiAyats surahNumber={ayatNumber} />
        <AyatNav />
      </div>

      <div className='mt-[8rem] w-full'>
        <div className='w-[80%] mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            {asmaulHusnaData.map(item => (

              <AyatCard key={item.id} number={item.verse_number} ar={arabic_text} text={transliteration_en} id={translation_id} />

            ))}
          </div>
        </div>

      </div>
    </>
  );

};

export default AyatPage;



