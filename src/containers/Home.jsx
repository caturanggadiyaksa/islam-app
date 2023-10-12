import React from "react";
// import Card from '../components/CardComp';
import Bar from '../components/BarComp';
import HomeComp from '../components/iconCom/HomeComp';

const Home = () => {
    return (
       


        <div>

            <div className="w-full min-h-screen bg-fixed bg-center bg-top bg-contain bg-no-repeat bg-[url('/img/mosque.jpg')]">
        
                <div className="pt-4 w-[85%] mx-auto  ">
                    <div className="flex justify-between items-center ">
                        <div>
                            <p className="text-white">Assalamualaikum</p>
                            
                            <p className="text-white text-xs">25 Rabi'ul Awal 1445</p>
                        </div>
                        <div className="">
                            <img
                                className="w-[2rem] h-[2rem] rounded-full"
                                src="/img/notification-bell_5365456.png"
                                alt=""
                            />

                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex justify-center items-center">
                            <p className="text-white font-bold text-3xl">17:14</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col pt-[3rem]">

                    <div className="w-full bg-white rounded-t-[2.5rem]">
                        <div className=" h-max mx-auto mt-4">
                            <div className="flex h-[5rem] justify-center items-center space-x-4 text-xs">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="pb-1">
                                        <p>Fajr</p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="/img/19852069_6205248.jpeg"
                                            alt=""
                                        />
                                        {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" /> */}
                                    </div>
                                    <div className="pt-1">
                                        <p>04:41</p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div>
                                        <p className="pb-1">Dzuhur</p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="/img/vector-different-cartoon-sky-morning-day-evening-night-with-clouds-sun-moon-background_730604-481.png"
                                            alt=""
                                        />
                                        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                                    </div>
                                    <div className="pt-1">
                                        <p>12:00</p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div>
                                        <p className="pb-1">Asr</p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="/img/esdfd.png"
                                            alt=""
                                        />
                                        {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" /> */}
                                    </div>
                                    <div className="pt-1">
                                        <p>15:14</p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div>
                                        <p className="pb-1">Maghrib</p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="/img/3799979_2006859.jpeg"
                                            alt=""
                                        />
                                        {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" /> */}
                                    </div>
                                    <div className="pt-1">
                                        <p>18:02</p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div>
                                        <p className="pb-1">Isya</p>
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="/img/vector-different-cartoon-sky.png"
                                            alt=""
                                        />
                                        {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" /> */}
                                    </div>
                                    <div className="pt-1">
                                        <p>19:14</p>
                                    </div>

                                </div>
                            </div>

                            <div className="w-[85%] h-max mx-auto mt-4 pb-[8rem]">
                                <div className="pt-2">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-sm">All Features</p>
                                        <p className="text-[#1053f3] text-xs">See All</p>
                                    </div>

                                    <div className="m-1 w-full h-max mx-auto ">

                                        <div class="flex flex-wrap gap-6 justify-center items-center ">

                                            <div className="flex flex-col justify-center items-center w-[4rem] h-[5rem] mb-1 bg-white rounded-xl shadow dark:bg-gray-600 dark:border-gray-700">

                                                <img
                                                    className="w-[3rem] h-[3rem]"
                                                    src="/img/quran.png"
                                                    alt=""
                                                />

                                                <div className="pt-1 text-center">
                                                    <a href="#">
                                                        <h5 className="text-xs font-semibold  text-gray-900">
                                                            Quran
                                                        </h5>
                                                    </a>

                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center w-[4rem] h-[5rem] mb-1 bg-white rounded-xl shadow dark:bg-gray-600 dark:border-gray-700">

                                                <img
                                                    className="w-[3rem] h-[3rem]"
                                                    src="/img/hadist.png"
                                                    alt=""
                                                />

                                                <div className="pt-1 text-center">
                                                    <a href="#">
                                                        <h5 className="text-xs font-semibold  text-gray-900">
                                                            Hadist
                                                        </h5>
                                                    </a>

                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center w-[5rem] h-[5rem] mb-1 bg-white rounded-xl shadow dark:bg-gray-600 dark:border-gray-700">

                                                <img
                                                    className="w-[3rem] h-[3rem]"
                                                    src="/img/doa.jpeg"
                                                    alt=""
                                                />

                                                <div className="pt-1 text-center">
                                                    <a href="#">
                                                        <h5 className="text-xs font-semibold  text-gray-900">
                                                            Doa
                                                        </h5>
                                                    </a>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>

            
            <Bar customClasses="fixed inset-x-0 bottom-2" home={<HomeComp />} />

        </div >
    );
};


export default Home;