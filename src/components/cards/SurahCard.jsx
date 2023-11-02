import React from "react";

const SurahCard = () => {
    return (
        <>
            <div className="max-w-[23rem] w-[23rem] bg-white shadow-lg rounded-lg m-3">
                <div className="flex justify-center items-center p-3">
                    <div className="w-4/6">
                        <div className="flex gap-2 items-center pl-2">
                            <div className="mr-2">
                                <div className="bg-slate-200 w-10 h-10 rounded-full">
                                    <div className=" w-10 h-10 rounded-full flex justify-center items-center">
                                        <p>
                                            1
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <p className="font-bold text-md">
                                        Al-Ma'idah
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-extralight">
                                        Jamuan(hidangan makanan)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-extralight">
                                       Madinah
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-2/6">
                        <div className="flex flex-col items-center pr-2">
                            <div>
                                <p className="font-bold text-md">
                                    Al-Ma'idah
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-extralight">
                                    120 Ayat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SurahCard;