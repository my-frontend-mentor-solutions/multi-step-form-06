import React from 'react'

export default function HeadingDiv(props) {
  return (
    <div className='flex flex-col mb-[14px] mx-7'>
        <p className='text-[26px] font-bold'>{props.heading}</p>
        <p className='text-[14px] text-cool-gray'>{props.headingDescription}</p>
    </div>
  )
}
