import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function StepsContainer() {

    let location = useLocation();

    const [currentRoute, setCurrentRoute] = useState("");

    useEffect(() => {
        let route = location.pathname === "/" ? "info" : location.pathname.replace("/", "");
        setCurrentRoute(route);
    }, [location.pathname]);

    return (
        <div className="lg:bg-sidebar-desktop bg-cover lg:aspect-[0.4823] lg:flex-[3] lg:pl-5 lg:pt-7 lg:rounded-lg lg:h-auto bg-sidebar-mobile aspect-[2.1]">

            <div className='flex lg:flex-col justify-center'>

                <StepsDiv serial={1} label="INFO" path={currentRoute} />
                <StepsDiv serial={2} label="SELECT PLAN" path={currentRoute} />
                <StepsDiv serial={3} label="ADD ONS" path={currentRoute} />
                <StepsDiv serial={4} label="SUMMARY" path={currentRoute} />

            </div>
        </div>
    )
}

const Path = {
    info: 1,
    plans: 2,
    addons: 3,
    summary: 4
}

const StepsDiv = (props) => {

    let isSelected = props.serial === Path[props.path];
    let textColor = isSelected ? "text-purplish-blue" : "text-extra-light-gray";
    let bgColor = isSelected ? "bg-light-blue" : "";
    return (

        <div className='flex flex-row items-center justify-center lg:px-0 lg:py-[10px] py-5 px-2'>

            <div className='lg:flex-[2] text-center lg:mr-3 justify-center'>
                <p className={`text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%] w-[35px] h-[35px] font-bold ${textColor} ${bgColor}`}>{props.serial}</p>
            </div>

            <div className='lg:flex lg:flex-col lg:flex-[8] hidden'>
                <p className='text-[14px] text-cool-gray'>STEP {props.serial}</p>
                <p className='text-[15px] font-bold text-extra-light-gray'>{props.label}</p>
            </div>

        </div>
    )
};