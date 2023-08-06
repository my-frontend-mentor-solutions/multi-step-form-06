import React from 'react'
import arcadeImg from '../images/icon-arcade.svg';
import advancedImg from '../images/icon-advanced.svg';
import proImg from '../images/icon-pro.svg';

export default function Content02() {
  return (
    <div className='px-7 flex flex-col'>
        <PlansDivContainer/>
    </div>
  )
}

const PlansDivContainer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between mt-10'>
                <PlansDiv image={arcadeImg} planName="Arcade" planAmount="₹119/month" />
                <PlansDiv image={advancedImg} planName="Advanced" planAmount="₹179/month" />
                <PlansDiv image={proImg} planName="Pro" planAmount="₹249/month" />
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
    )
};

const PlansDiv = (props) => {
    return (
        <div id='plans-div' className='rounded-lg border-light-gray border-solid border-[2px] p-3 w-full mx-1 hover:bg-extra-light-gray hover:cursor-pointer duration-200'>
                    <img src={props.image} alt="" />
                    <p className=' font-medium mt-10'>{props.planName}</p>
                    <p className='text-[13px] text-cool-gray'>{props.planAmount}</p>
        </div>
    )
}; 
