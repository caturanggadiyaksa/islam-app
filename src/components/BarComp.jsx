import React from "react";

const BarComp = ({ customClasses, iconComp, tes, home }) => {
    return (
        <div className={customClasses}>
            <aside className=" " aria-label="Sidebar">
                <div className="bg-white border-t border-gray-200 w-full min-h-[4rem] ">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-1/2 flex justify-start mt-2 px-2">{iconComp}</div>
                        <div className="w-1/2 flex justify-end mt-2 px-2">{tes}</div>
                    </div>
                    {home}
                </div>
            </aside>
        </div>
    );
}

export default BarComp;
