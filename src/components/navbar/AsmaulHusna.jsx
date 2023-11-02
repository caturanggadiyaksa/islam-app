import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const AsmaulHusna = () => {
    return (
        <>
            <header
                className="fixed top-0 z-50 w-full h-[5rem] bg-slate-50 shadow-gray-500 drop-shadow-md"
            >
                <div className=" w-full flex justify-center items-center">
                    <div className="w-full h-[5rem]">
                        <div className="w-[90%] h-[5rem] mx-auto flex items-center justify-beetwen">
                            <div className="w-1/2 flex items-center">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faArrowLeftLong} />
                                </Link>
                                <div className="ml-4">
                                    Asmaul Husna
                                </div>
                            </div>






                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default AsmaulHusna;