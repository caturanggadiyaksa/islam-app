import React from "react";
import Bar from '../components/BarComp';
import LoveComp from "../components/iconCom/LoveComp";
import AcountComp from '../components/iconCom/AcountComp';
import HomeComp from '../components/iconCom/HomeComp';

const AsmaulHusna = () => {
    return (
        <div>
            <div className="pb-[10rem] pt-[2rem]">
                <Bar iconComp={<LoveComp />} tes={<AcountComp/>} customClasses="fixed inset-x-0 top-0" />
                <div className="pt-[4rem]">
                    
                   
                </div>

            </div>

            <Bar customClasses="fixed inset-x-0 bottom-0" home={<HomeComp />} />

        </div>

    );
};


export default AsmaulHusna;