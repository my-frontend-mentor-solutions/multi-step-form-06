import React from 'react'
import thankYouImg from '../images/icon-thank-you.svg'

export default function Content05() {
  return (
    <div className='px-7 flex flex-col items-center justify-center text-center'>
        <img src={thankYouImg} alt="" className='w-[75px] my-3'/>
        <p className='my-3 font-bold text-[26px] text-marine-blue'>Thank You!</p>
        <p className='my-2 text-[14px] text-cool-gray'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaing.com</p>
    </div>
  )
}
