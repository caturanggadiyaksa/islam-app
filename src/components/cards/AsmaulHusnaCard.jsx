import React from "react";
import './cardstyle.css';



const AsmaulHusnaCard = ({ id, arab, indo, latin }) => {


    

    return (
        <>
            <div className="max-w-[40rem] w-[40rem] bg-white shadow-lg rounded-lg my-6">
                <div className=" w-full flex justify-center items-center p-3">
                    <div className="w-full">
                        <div className="flex items-center pl-2">
                        
                            <div className="mr-2">
                                <div className="bg-slate-200 w-10 h-10 rounded-full">
                                    <div className=" w-10 h-10 rounded-full flex justify-center items-center">
                                        <p>
                                            {id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="py-4">
                                    <p className=" text-2xl my-font" >
                                      {arab}
                                    </p>
                                </div>
                                <div className="py-2">
                                    <p className="text-lg font-semibold">
                                        {latin}
                                    </p>
                                </div>

                                <div className="py-2">
                                    <p className="text-md font-extralight">
                                        {indo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AsmaulHusnaCard;