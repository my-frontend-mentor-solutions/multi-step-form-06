import React from 'react'

export default function Content03() {
  return (
    <div className='px-7 flex flex-col'>
        <div className='flex flex-col my-7'>
        <AddOns heading="Online Service" headingDescription="Access to multiplayer games" planAmount="+₹29/month" />
        <AddOns heading="Larger Storage" headingDescription="Extra 5TB of cloud storage" planAmount="+₹39/month" />
        <AddOns heading="Customizable Profile" headingDescription="Custom theme on your profile" planAmount="+₹19/month" />
        </div>
    </div>
  )
}

const AddOns = (props) => {
    return (
        <div className='flex flex-row px-3 py-[10px] my-[6px] border-solid border-light-gray border-[2px] rounded-lg justify-between items-center hover:border-marine-light-blue hover:cursor-pointer hover:bg-extra-light-gray duration-200'>
            <div className='flex flex-row'>
                 <input type="checkbox" className=''/>

                <label class="container">
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                </label>

                <div className='flex flex-col ml-4'>
                    <p className='font-medium'>{props.heading}</p>
                    <p className='text-[13px] text-cool-gray'>{props.headingDescription}</p>
                </div>
            </div>

            <p className='text-[14px] text-marine-light-blue font-medium'>{props.planAmount}</p>
        </div>
    )
};