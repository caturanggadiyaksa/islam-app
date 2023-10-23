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
                            <a
                                href="#"
                                target="_blank"
                                className="ml-4 flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg"
                            >
                                <FontAwesomeIcon icon={faHouseChimneyWindow} className="text-white" />


                            </a>
                        </Link>


                        <Link to="/Bookmark">
                            <a
                                href="#"
                                target="_blank"
                                className=" flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg "
                            >
                                <FontAwesomeIcon icon={faHeart} className="text-white" />


                            </a>

                        </Link>

                        <Link to="/account">
                            <a
                                href="#"
                                className=" mr-4 flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg"
                            >

                                <FontAwesomeIcon icon={faUserTie} className="text-white" />

                            </a>

                        </Link>

                    </div>

                </div>
            </aside>
        </div>
    );
};

export default Footer;