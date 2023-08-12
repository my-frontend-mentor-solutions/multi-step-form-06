import React from 'react'
import arcadeImg from '../images/icon-arcade.svg';
import advancedImg from '../images/icon-advanced.svg';
import proImg from '../images/icon-pro.svg';
import { useState } from 'react';
import ButtonDiv from './ButtonDiv';
import HeadingDiv from './HeadingDiv';

export default function Content02() {
    const [selectedPlan, setSelectedPlan] = useState("");

    const planClickListener = (planType) => {
        selectedPlan === planType ? setSelectedPlan("") : setSelectedPlan(planType);
    }

    return (
        <>
            <HeadingDiv title={"Select Your Plan"} desc={"You have the option for monthly or yearly biling."} />
            <div className='flex flex-col lg:mx-10 mx-7'>

                <div className='flex lg:flex-row justify-between flex-col'>

                    <PlansDiv
                        planType={PlanType.ARCADE}
                        selected={selectedPlan}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                    <PlansDiv
                        planType={PlanType.ADVANCED}
                        selected={selectedPlan}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                    <PlansDiv
                        planType={PlanType.PRO}
                        selected={selectedPlan}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                </div>

                <div className='w-full justify-center flex bg-extra-light-gray p-2 rounded-lg items-center mt-8'>

                    <p>Monthly</p>
                    <label className="switch">
                        <input type="checkbox" className='switch-input' />
                        <span className="slider round"></span>
                    </label>
                    <p>Yearly</p>

                </div>

            </div>

            <ButtonDiv prevRoute nextRoute={"addons"} />
        </>
    )
}

const PlanType = {
    ARCADE: "ARCADE",
    ADVANCED: "ADVANCED",
    PRO: "PRO"
}

const PlanName = {
    ARCADE: "Arcade",
    ADVANCED: "Advanced",
    PRO: "Pro"
}

const PlanAmount = {
    ARCADE: "₹119/month",
    ADVANCED: "₹179/month",
    PRO: "₹249/month"
}

const PlanImage = {
    ARCADE: arcadeImg,
    ADVANCED: advancedImg,
    PRO: proImg
}


const PlansDiv = (props) => {

    const isSelected = props.selected === props.planType;
    const borderColor = isSelected ? "border-marine-light-blue" : "border-light-gray";
    const backgroundColor = isSelected ? "bg-extra-light-gray" : "bg-white";

    return (
        <div
            id='plans-div'
            className={`rounded-lg ${borderColor} ${backgroundColor} border-solid border-[2px] lg:p-3 p-5 w-full lg:m-0 lg:mx-1 my-1 hover:bg-extra-light-gray hover:cursor-pointer duration-200 lg:block flex `}
            onClick={() => props.clickListener(props.planType)}
        >
            <img src={PlanImage[props.planType]} alt="" />

            <div className='lg:m-0 ml-5'>
                <p className=' font-medium lg:mt-10 m-0'>{PlanName[props.planType]}</p>
                <p className='text-[13px] text-cool-gray'>{PlanAmount[props.planType]}</p>
            </div>
        </div>
    )
};