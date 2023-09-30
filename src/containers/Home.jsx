import React from "react";
import Card from '../components/CardComp';
import Bar from '../components/BarComp';
import HomeComp from '../components/iconCom/HomeComp';

const Home = () => {
    return (
        <div>
            <div className="pb-[10rem] pt-[2rem]">

               
                <div className="">
                    <Card menuUtama="Quran" />
                    <Card menuUtama="Juz" />
                    <Card menuUtama="Tuntunan Salat" />
                    <Card menuUtama="Asmaul Husna"/>
                    <Card menuUtama="Doa Harian"/>
                    <Card menuUtama="Hadist" />
                    <Card menuUtama="Doa Tahlil" />
                   
                </div>

            </div>

            <Bar customClasses="fixed inset-x-0 bottom-0" home={<HomeComp />} />

        </div>

    );
};


export default Home;