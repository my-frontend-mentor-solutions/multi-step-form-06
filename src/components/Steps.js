import React from 'react'

export default function Steps() {
  return (
    <div className='flex flex-col w-full'>

      <StepsDiv stepNum="1" stepFullNum="STEP 1" stepName="YOUR INFO"/>
      <StepsDiv stepNum="2" stepFullNum="STEP 2" stepName="SELECT PLAN"/>
      <StepsDiv stepNum="3" stepFullNum="STEP 3" stepName="ADD ONS"/>
      <StepsDiv stepNum="4" stepFullNum="STEP 4" stepName="SUMMARY"/>
      
    </div>
  )
}

const StepsDiv = (props) => {
  return (
    <div className='flex flex-row items-center py-[10px]'>
        <div className='flex-[2] text-center mr-3'>
          <p className='text-[20px] flex items-center justify-center border-[1px] border-solid border-white p-[2px] rounded-[50%]  aspect-square w-full font-bold text-extra-light-gray'>{props.stepNum}</p>
        </div>
        <div className='flex flex-col flex-[8]'>
          <p className='text-[14px] text-cool-gray'>{props.stepFullNum}</p>
          <p className='text-[15px] font-bold text-extra-light-gray'>{props.stepName}</p>
        </div>
      </div>
  )
};