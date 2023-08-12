import React from 'react'

export default function HeadingDiv(props) {
  return (
    <div className='flex flex-col lg:m-0 lg:mb-8 lg:mx-10 mx-7 mb-7 '>
        <p className='lg:text-[26px] text-[28px] font-bold'>{props.title}</p>
        <p className='lg:text-[14px] text-[13px] text-cool-gray'>{props.desc}</p>
    </div>
  )
}
