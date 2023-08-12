import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function ButtonDiv(props) {
  
  const navigate = useNavigate();

  return (
    <div className='relative lg:m-0 lg:mt-14 flex items-center lg:mx-10 mx-7 my-12'>
      {
        props.prevRoute && <button type="button" className='absolute left-0 text-cool-gray hover:text-marine-light-blue duration-200' onClick={() => navigate(-1)} >Previous Step</button>
      }
      {
        props.nextRoute && <Link type="button" className='absolute right-0 text-extra-light-gray bg-marine-blue px-[18px] py-[10px] rounded-lg hover:bg-marine-light-blue duration-200' to={"/"+props.nextRoute} >{ props.final ? "Confirm" : "Next Step"}</Link>
      }
    </div>
  )
}
