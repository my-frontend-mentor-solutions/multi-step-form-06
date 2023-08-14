import React from 'react'
import Wrapper from './Wrapper'
import "../index.css";
import Notice from './Notice';

export default function Container() {
  return (
    <div  className='bg-[#f0f6ff] w-full h-screen flex justify-center lg:items-center'>
        <Notice/>
        <Wrapper/>
    </div>
  )
}
