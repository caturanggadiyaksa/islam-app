import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ menu, img, routing }) => {
    return (
        <div>


            <Link to={routing}>
                <div className="max-w-[80] w-80 bg-white shadow-lg rounded-lg m-4">
                    <div className="flex justify-center items-center p-3">
                        <div className="w-4/12 flex justify-center">
                            <img
                                className="w-[5rem] h-[5rem]"
                                src={img}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-start items-center text-left w-8/12 ml-6">
                            <h2 className="text-lg font-normal pb-2">{menu}</h2>
                        </div>
                    </div>
                </div>

            </Link>

        </div>
    );
};

export default Card;