import React from 'react'
import ContentContainer from './ContentContainer'
import StepsContainer from './StepsContainer'

export default function Wrapper() {
  return (
    <div className='h-auto w-full lg:bg-white lg:rounded-lg flex lg:w-1/2  lg:flex-row lg:p-[14px] flex-col p-0'>
      <StepsContainer/>
      <ContentContainer/>
    </div>
  )
}
