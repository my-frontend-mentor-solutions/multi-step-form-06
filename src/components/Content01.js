import React from 'react'

export default function Content01() {
    

  const nameInputValidator = (value) => {

    if (value.trim() === "") {
      console.log("reched");
    }
  }

  return (
    <div className='px-7 flex flex-col'>  

        <InputDiv inputId="name-input" labelName="Name" inputType="text" placeholder="Your Name" onInputListener={(event) => nameInputValidator(event.target.value) }/>
        <InputDiv inputId="email-input" labelName="Email Address" inputType="email" placeholder="you@example.com"/>
        <InputDiv inputId="number-input" labelName="Phone Number" inputType="number" placeholder="12345 12345"/>

    </div>
  )
}

const InputDiv = (props) => {

  return (
      <div className='flex flex-col my-[10px]'>
          <label htmlFor={props.inputId} className='all-label font-[500] duration-200'>{props.labelName}</label>
          <input
          type={props.inputType}
          id={props.inputId}
          className='all-input rounded-[7px] border-[2px] border-solid border-cool-gray p-[10px] px-[14px] text-[15px] outline-[none] outline-0 duration-200'
          onInput={(event) => {
            if(props.onInputListener) {
                props.onInputListener(event)
            }
          }}
          placeholder={props.placeholder}/>
      </div>
  )
};