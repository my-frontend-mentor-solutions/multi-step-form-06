import React from 'react'
import Content01 from './Content01'
import Content02 from './Content02'
import Content03 from './Content03'
import Content04 from './Content04'
import Content05 from './Content05'
import { Routes, Route } from 'react-router-dom'

export default function ContentContainer() {

  return (
    <div className='lg:flex-[7] lg:m-0 lg:my-5 lg:px-7 lg:static bg-white absolute top-[80px] h-full w-full '>

      <Routes>
        <Route path={'/'} index element={<Content01 />} />
        <Route path={'/plans'} element={<Content02 />} />
        <Route path={'/addons'} element={<Content03 />} />
        <Route path={'/summary'} element={<Content04 />} />
        <Route path={'/thankyou'} element={<Content05 />} />
      </Routes>

    </div>
  )
}