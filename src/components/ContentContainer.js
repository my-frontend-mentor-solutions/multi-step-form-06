import React from 'react'
import Content01 from './Content01'
import Content02 from './Content02'
import Content03 from './Content03'
import Content04 from './Content04'
import Content05 from './Content05'
import HeadingDiv from './HeadingDiv'
import ButtonDiv from './ButtonDiv'
import { Routes, Route } from 'react-router-dom'

export default function ContentContainer() {
  
  // const headingTitle = ["","","",""];
  // const headingDesc = ["","","",""];

  return (
    <div className='flex-[7] p-5'>
      <HeadingDiv heading="Personal Info" headingDescription="Please provide your name, email address and phone number." />
      
      <Routes>
        <Route path={'/'} index element={<Content01/>} />
        <Route path={'/plans'} element={<Content02/>} />
        <Route path={'/addons'} element={<Content03/>} />
        <Route path={'/summary'} element={<Content04/>} />
        <Route path={'/thankyou'} element={<Content05/>} />
      </Routes>
     

      <ButtonDiv leftBtn="Previous Step" rightBtn="Next Step" />
    </div>
  )
}