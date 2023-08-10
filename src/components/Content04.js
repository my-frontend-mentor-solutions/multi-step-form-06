import React from 'react'

export default function Content04() {
  return (
    <div className='px-7 flex flex-col'>
        <SummaryDiv  />
    </div>
  )
}

const SummaryDiv = () => {
    return (
        <div className='flex flex-col bg-extra-light-gray rounded-lg px-5 text-Marine-blue'>
            <div className='flex flex-row justify-between items-center py-4'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[14px]'>Arcade (Monthly)</p>
                    <p className='text-[13px] underline text-marine-light-blue hover:cursor-pointer'>Change</p>
                </div>
                <p className='font-bold text-[15px]'>₹119/month</p>
            </div>

            <div className="border-solid border-light-gray border-[1px]"></div>

            <div className='flex flex-row justify-between items-center pt-4 text-[14px]'>
                <p className='text-cool-gray '>Online Service</p>
                <p className='text-Marine-blue font-medium'>+₹29/month</p>
            </div>

            <div className='flex flex-row justify-between items-center py-4 text-[14px]'>
                <p className='text-cool-gray '>Larger Storage</p>
                <p className='text-Marine-blue font-medium'>+₹39/month</p>
            </div>

            <div className="border-solid border-light-gray border-[1px]"></div>

            <div className='flex flex-row justify-between items-center py-4'>
                <p className='text-Marine-blue text-[15px]'>Total(per month)</p>
                <p className='text-Purplish-blue font-bold text-[16px]'>+₹187/month</p>
            </div>
        </div>
    )
};
