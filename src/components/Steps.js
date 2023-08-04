import React from 'react'

export default function Steps() {
  return (
    <div className='flex flex-col text-white w-full'>

      <div className='flex flex-row items-center py-[10px]'>
        <div className='flex-[2]  text-center mr-3'>
          <p className='text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%]  aspect-square w-full text-Purplish-blue bg-Light-blue font-bold'>1</p>
        </div>
        <div className='flex flex-col flex-[8]'>
          <p className='text-[14px] text-cool-gray'>STEP 1</p>
          <p className='text-[15px] font-bold text-extra-light-gray'>YOUR INFO</p>
        </div>
      </div>
      
      <div className='flex flex-row items-center py-[10px]'>
        <div className='flex-[2] text-center mr-3'>
          <p className='text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%]  aspect-square w-full font-bold'>2</p>
        </div>
        <div className='flex flex-col flex-[8]'>
          <p className='text-[14px] text-cool-gray'>STEP 2</p>
          <p className='text-[15px] font-bold text-extra-light-gray'>SELECT PLAN</p>
        </div>
      </div>

      <div className='flex flex-row items-center py-[10px]'>
        <div className='flex-[2] text-center mr-3'>
          <p className='text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%]  aspect-square w-full font-bold'>3</p>
        </div>
        <div className='flex flex-col flex-[8]'>
          <p className='text-[14px] text-cool-gray'>STEP 3</p>
          <p className='text-[15px] font-bold text-extra-light-gray'>SADD-ONS</p>
        </div>
      </div>

      <div className='flex flex-row items-center py-[10px]'>
        <div className='flex-[2] text-center mr-3'>
          <p className='text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%]  aspect-square w-full font-bold'>4</p>
        </div>
        <div className='flex flex-col flex-[8]'>
          <p className='text-[14px] text-cool-gray'>STEP 4</p>
          <p className='text-[15px] font-bold text-extra-light-gray'>SUMMARY</p>
        </div>
      </div>
      
    </div>
  )
}
