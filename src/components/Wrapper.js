import React from 'react'
import ContentContainer from './ContentContainer'
import StepsContainer from './StepsContainer'

export default function Wrapper() {
  return (
    <div className='w-1/2 h-auto bg-white rounded-xl flex flex-row p-[14px]'>
      <StepsContainer/>
      <ContentContainer/>
    </div>
  )
}
