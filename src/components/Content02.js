import React from 'react'
import arcadeImg from '../images/icon-arcade.svg';
import advancedImg from '../images/icon-advanced.svg';
import proImg from '../images/icon-pro.svg';
import { useState } from 'react';

export default function Content02() {
    const [selectedPlan, setSelectedPlan] = useState("");

    const planClickListener = (planType) => {
        selectedPlan === planType? setSelectedPlan("") : setSelectedPlan(planType) ;
    }

    return (
        <div className='px-7 flex flex-col'>
            <div className='flex flex-col'>
            <div className='flex flex-row justify-between mt-10'>

                <PlansDiv
                planType={PlanType.ARCADE}
                selected={selectedPlan}
                clickListener={ (planType) => planClickListener(planType) }
                />

                <PlansDiv 
                planType={PlanType.ADVANCED} 
                selected={selectedPlan} 
                clickListener={ (planType) => planClickListener(planType) } 
                />
                
                <PlansDiv 
                planType={PlanType.PRO} 
                selected={selectedPlan} 
                clickListener={ (planType) => planClickListener(planType) } 
                />
                
            </div>

            <div className='w-full justify-center flex bg-extra-light-gray p-2 rounded-lg items-center mt-8'> 

                <p>Monthly</p>
                <label className="switch">
                    <input type="checkbox" className='switch-input'/>
                    <span className="slider round"></span>
                </label>
                <p>Yearly</p>

            </div>
        </div>
        </div>
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
    ARCADE: "119/month",
    ADVANCED: "179/month",
    PRO: "249/month"
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
        className={`rounded-lg ${borderColor} ${backgroundColor} border-solid border-[2px] p-3 w-full mx-1 hover:bg-extra-light-gray hover:cursor-pointer duration-200`}
        onClick={() => props.clickListener(props.planType) }
        >        
            <img src={PlanImage[props.planType]} alt="" />
            <p className=' font-medium mt-10'>{PlanName[props.planType]}</p>
            <p className='text-[13px] text-cool-gray'>{PlanAmount[props.planType]}</p>
        </div>
    )
};