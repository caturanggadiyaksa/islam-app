import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="fixed inset-x-0 bottom-2">
            <aside className="flex justify-center items-center" aria-label="Sidebar">
                <div className="bg-[#1053f3] rounded-full w-[75%] min-h-[3rem] ">
                    <div className="w-full flex items-center justify-between pt-1 px-4">
                        <Link to="/">
                            <div className="ml-4 flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg"
                            >
                                <FontAwesomeIcon icon={faHouseChimneyWindow} className="text-white" />


                            </div>
                        </Link>


                        <Link to="/Bookmark">
                            <div className=" flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg "
                            >
                                <FontAwesomeIcon icon={faHeart} className="text-white" />


                            </div>

                        </Link>

                        <Link to="/account">
                            <div
                                
                                className=" mr-4 flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg"
                            >

                                <FontAwesomeIcon icon={faUserTie} className="text-white" />

                            </div>

                        </Link>

                    </div>

                </div>
            </aside>
        </div>
    );
};

export default Footer;