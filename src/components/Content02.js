import React from 'react'
import ButtonDiv from './ButtonDiv';
import HeadingDiv from './HeadingDiv';
import { PlanType, PlanName, MonthlyBill, YearlyBill, PlanImage } from "../util/PriceUtil.js";
export default function Content02(
    { selectedPlan, setSelectedPlan, isYearlyBilling, setIsYearlyBilling }
) {

    const showError = () => {
        alert("Plan not selected");
    }

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
                        yearlyBilling={isYearlyBilling}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                    <PlansDiv
                        planType={PlanType.ADVANCED}
                        selected={selectedPlan}
                        yearlyBilling={isYearlyBilling}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                    <PlansDiv
                        planType={PlanType.PRO}
                        selected={selectedPlan}
                        yearlyBilling={isYearlyBilling}
                        clickListener={(planType) => planClickListener(planType)}
                    />

                </div>

                <div className='w-full justify-center flex bg-extra-light-gray p-2 rounded-lg items-center mt-8'>

                    <p>Monthly</p>
                    <label className="switch">
                        <input type="checkbox" className='switch-input' onChange={(event) => setIsYearlyBilling(event.target.checked)} />
                        <span className="slider round"></span>
                    </label>
                    <p>Yearly</p>

                </div>

            </div>

            <ButtonDiv prevRoute validate expectedData={selectedPlan} isReadyListener={(ready) => {
                if (!ready) {
                    showError();
                }
            } } nextRoute={"addons"} />
        </>
    )
}

const PlansDiv = (props) => {

    const isSelected = props.selected === props.planType;
    const borderColor = isSelected ? "border-marine-light-blue" : "border-light-gray";
    const backgroundColor = isSelected ? "bg-extra-light-gray" : "bg-white";
   
    const billAmount = props.yearlyBilling ? YearlyBill[props.planType] : MonthlyBill[props.planType];

    return (
        <div
            id='plans-div'
            className={`rounded-lg ${borderColor} ${backgroundColor} border-solid border-[2px] lg:p-3 p-4 w-full lg:m-0 lg:mx-1 my-1 hover:bg-extra-light-gray hover:cursor-pointer duration-200 lg:block flex `}
            onClick={() => props.clickListener(props.planType)}
        >
            <img src={PlanImage[props.planType]} alt="" />

            <div className='lg:m-0 ml-5'>
                <p className=' font-medium lg:mt-10 m-0'>{PlanName[props.planType]}</p>
                <p className='text-[13px] text-cool-gray'>₹{billAmount}/{props.yearlyBilling ? "year" : "month"}</p>
            </div>
        </div>
    )
};