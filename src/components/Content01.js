import React from 'react'

export default function Content01() {
  return (
    <div className='px-7 flex flex-col'>

        <div className='flex flex-col mb-[14px]'>
            <p className='text-[26px] font-bold'>Personal Info</p>
            <p className='text-[14px] text-cool-gray'>Please provide your name, email address and phone number.</p>
        </div>

        <InputDiv inputId="name-input" labelName="Name" inputType="text" placeholder="Your Name"/>
        <InputDiv inputId="email-input" labelName="Email Address" inputType="email" placeholder="you@example.com"/>
        <InputDiv inputId="number-input" labelName="Phone Number" inputType="number" placeholder="12345 12345"/>

        <div className='flex mt-16 flex-row-reverse'>
            <button type="button" className='text-extra-light-gray bg-Marine-blue px-[18px] py-[10px] rounded-lg hover:bg-marine-light-blue duration-200'>Next Step</button>
        </div>

    </div>
  )
}

const InputDiv = (props) => {
    return (
        <div className='flex flex-col my-[10px]'>
            <label htmlFor={props.inputId} className='all-label font-[500] duration-200'>{props.labelName}</label>
            <input type={props.inputType} id={props.inputId} className='all-input rounded-[7px] border-[2px] border-solid border-cool-gray p-[10px] px-[14px] text-[15px] outline-[none] outline-0 duration-200' placeholder={props.placeholder}/>
        </div>
    )
};