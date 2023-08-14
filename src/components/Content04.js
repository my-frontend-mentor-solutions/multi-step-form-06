import React from 'react'
import { Link } from 'react-router-dom';
import HeadingDiv from './HeadingDiv';
import ButtonDiv from './ButtonDiv';
import { PlanName, MonthlyBill, YearlyBill } from "../util/PriceUtil.js";
import { AddonName, YearlyAmount, MonthlyAmount } from "../util/AddonUtil"

export default function Content04({ selectedPlan, isYearlyBilling, selectedAddon }) {

    const planPrice = isYearlyBilling ? YearlyBill[selectedPlan] : MonthlyBill[selectedPlan];
    const billingCycle = isYearlyBilling ? "year" : "month";
    let totalPrice = planPrice ;

    return (
        <>
            <HeadingDiv title={"Finishing Up"} desc={"Double-check everything looks OK before confirming."} />
            <div className='lg:m-0 lg:mx-10 m-7 flex flex-col'>
                <div className='flex flex-col bg-extra-light-gray rounded-lg px-5 text-Marine-blue'>

                    <div className='flex flex-row justify-between items-center py-4'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[14px]'>{PlanName[selectedPlan]} ({billingCycle})</p>
                            <Link className='text-[13px] underline text-marine-light-blue hover:cursor-pointer' to="/plans" >Change</Link>
                        </div>
                        <p className='font-bold text-[15px]'>₹{planPrice}/{billingCycle}</p>
                    </div>

                    <div className="border-solid border-light-gray border-[1px]"></div>
                    
                    {
                        selectedAddon.map((addonType) => {

                            totalPrice += isYearlyBilling ? YearlyAmount[addonType] : MonthlyAmount[addonType];

                            return(
                                <div className='flex flex-row justify-between items-center pt-4 text-[14px]'>
                                    <p className='text-cool-gray '>{AddonName[addonType]}</p>
                                    <p className='text-Marine-blue font-medium'>+₹{isYearlyBilling ? YearlyAmount[addonType] : MonthlyAmount[addonType]}/{billingCycle}</p>
                                </div>
                            )
                        })
                    }

                    <div className="border-solid border-light-gray border-[1px] mt-4"></div>

                    <div className='flex flex-row justify-between items-center py-4'>
                        <p className='text-Marine-blue text-[15px]'>Total (per {billingCycle})</p>
                        <p className='text-purplish-blue font-bold text-[16px]'>+₹{totalPrice}/{billingCycle}</p>
                    </div>

                </div>
            </div>
            <ButtonDiv prevRoute nextRoute={"thankyou"} final />
        </>
    )
}

