import React from "react";


const Navbar = () => {


    return (
        <header
            className="fixed top-0 z-50 w-full h-[5rem] bg-slate-50 shadow-gray-500 drop-shadow-md"
        >
            <div className=" w-full flex justify-center items-center">
                <div className="w-full h-[5rem]">
                    <div className="w-full flex items-center justify-center">

                        <a href='/'>
                            <h2 className="text-slate-800 font-bold uppercase py-8 dark:text-gray-200">
                                My{" "}
                                <span className="text-violet-700 dark:text-violet-500">App</span>
                            </h2>
                        </a>


                    </div>
                </div>
              
            </div>
        </header>
    );
};

export default Navbar;