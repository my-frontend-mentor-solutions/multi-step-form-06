import React from 'react'
import { useState } from 'react'
import HeadingDiv from './HeadingDiv'
import ButtonDiv from './ButtonDiv'

export default function Content03() {

    const [selectedAddon, setSelectedAddon] = useState([]);

    const addonClickListener = (addonType) => {

        if (selectedAddon.includes(addonType)) {
            let updatedArray = selectedAddon.filter(type => type !== addonType);
            setSelectedAddon(updatedArray);
        } else {
            let updatedArray = [...selectedAddon, addonType];
            setSelectedAddon(updatedArray);
        }
    }

    return (
        <>
            <HeadingDiv title={"Pick Add-Ons"} desc={"Add ons help enhance your gaming experience."} />
            <div className=' lg:m-0 lg:mx-10 m-7 flex flex-col'>

                <div className='flex flex-col '>

                    <AddOns
                        addonType={AddonType.SERVICE}
                        selected={selectedAddon}
                        clickListener={(addonType) => addonClickListener(addonType)}
                    />

                    <AddOns
                        addonType={AddonType.STORAGE}
                        selected={selectedAddon}
                        clickListener={(addonType) => addonClickListener(addonType)}
                    />

                    <AddOns
                        addonType={AddonType.PROFILE}
                        selected={selectedAddon}
                        clickListener={(addonType) => addonClickListener(addonType)}
                    />

                </div>

            </div>
            <ButtonDiv prevRoute nextRoute={"summary"} />
        </>
    )
}

const AddonType = {
    SERVICE: "SERVICE",
    STORAGE: "STORAGE",
    PROFILE: "PROFILE"
}

const AddonName = {
    SERVICE: "Online Service",
    STORAGE: "Larger Storage",
    PROFILE: "Customizable Profile"
}

const AddonDesc = {
    SERVICE: "Access to multiplayer games",
    STORAGE: "Extra 5TB of cloud storage",
    PROFILE: "Custom theme on your profile"
}

const AddonAmount = {
    SERVICE: "+₹29/month",
    STORAGE: "+₹39/month",
    PROFILE: "+₹19/month"
}


const AddOns = (props) => {

    const isSelected = props.selected.includes(props.addonType);
    const borderColor = isSelected ? "border-marine-light-blue" : "border-light-gray";
    const backColor = isSelected ? "bg-extra-light-gray" : "bg-white";

    return (
        <div
            className={`flex flex-row lg:px-3 px-2 py-[12px] my-[6px] border-solid ${borderColor} ${backColor} border-[2px] rounded-lg justify-between items-center hover:bg-extra-light-gray hover:cursor-pointer`}
            onClick={() => props.clickListener(props.addonType)}
        >
            <div className='flex flex-row '>

                <label class="checkbox-container">
                    <input type="checkbox" className='checkbox' checked={isSelected} />
                    <span class="checkmark"></span>
                </label>

                <div className='flex flex-col lg:ml-7 ml-5'>
                    <p className='font-medium lg:text-[16px] text-[15px]'>{AddonName[props.addonType]}</p>
                    <p className='lg:text-[13px] text-cool-gray text-[11px]'>{AddonDesc[props.addonType]}</p>
                </div>
            </div>

            <p className='lg:text-[14px] text-[12px] text-marine-light-blue font-medium'>{AddonAmount[props.addonType]}</p>
        </div>
    )
};