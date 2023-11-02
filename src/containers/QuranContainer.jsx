import React from "react";
import SurahCard from "../components/cards/SurahCard";

const QuranContainer = () => {
    return(
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
                    <div className="flex flex-wrap  justify-center items-center">
                        <SurahCard/>
                        
                    </div>
                </div>

            </div>
        </>
    );
};

export default QuranContainer;