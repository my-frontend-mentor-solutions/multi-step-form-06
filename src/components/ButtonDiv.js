import React from 'react'

export default function ButtonDiv(props) {
  return (
    <div className='flex mt-10 justify-between mx-7'>
            <button type="button" className='text-cool-gray hover:text-marine-light-blue duration-200'>{props.leftBtn}</button>
            <button type="button" className='text-extra-light-gray bg-marine-blue px-[18px] py-[10px] rounded-lg hover:bg-marine-light-blue duration-200'>{props.rightBtn}</button>
    </div>
  )
}
