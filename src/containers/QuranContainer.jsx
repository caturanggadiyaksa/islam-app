import React, { useState, useEffect } from 'react';
import SurahCard from "../components/cards/SurahCard";


const QuranContainer = () => {

    const [surahData, setSurahData] = useState([]);

    useEffect(() => {

        const data = localStorage.getItem('surahData');
        if (data) {
            setSurahData(JSON.parse(data));
        }

    }, []);


    return (
        <>
            <div className="w-[90%] mx-auto">
                <div className="w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="font-semibold text-xl text-slate-900 pt-4">
                            Surah
                        </h1>
                    </div>
                </div>

                <div className="w-full mt-4">
                    <div className="flex flex-wrap  justify-center items-center mb-[10rem]">
                        {surahData.map(item => (

                      
                            <SurahCard key={item.id} tempat={item.revelation_id} total={item.numberOfVerses} arab={item.shortName} number={item.number} name={item.transliteration_id} arti={item.translation_id} />
                           
                           
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default QuranContainer;