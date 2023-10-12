import React from "react";

const BarComp = ({ customClasses, iconComp, tes, home }) => {
    return (
        <div className={customClasses}>
            <aside className="flex justify-center items-center" aria-label="Sidebar">
                <div className="bg-[#1053f3] rounded-full w-[75%] min-h-[3rem] ">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-1/2 flex justify-start  ">{iconComp}</div>
                        <div className="w-1/2 flex justify-end ">{tes}</div>
                    </div>
                    {home}
                </div>
            </aside>
        </div>
    );
}

export default BarComp;
