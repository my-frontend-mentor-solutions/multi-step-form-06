import React from 'react'
import ButtonDiv from './ButtonDiv';
import HeadingDiv from './HeadingDiv';
import { useState } from 'react';

export default function Content01() {

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");

    const nameInputValidator = (value) => {
        value.trim() === "" ? setNameError("Can't be empty") : setNameError("");
    }

    const emailInputValidator = (value) => {

        value.trim() === "" ? setEmailError("Can't be empty") : setEmailError("");
        
        if (value.trim() !== "" && value.indexOf("@") === -1) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    }

    const numberInputValidator = (value) => {

        value.trim() === "" ? setNumberError("Can't be empty") :  setNumberError("");
        value.length < 10 ? setNumberError("Invalid Number") :  setNumberError("");
        
    }

    return (
        <>
            <HeadingDiv title={"Personal Info"} desc={"Please provide your name, email address and phone number."} />

            <div className='flex flex-col lg:mx-10 mx-7'>

                <InputDiv inputCategory={InputCategory.TEXT} onInputListener={(event) => nameInputValidator(event.target.value)} errorLabel={nameError} />
                <InputDiv inputCategory={InputCategory.EMAIL} onInputListener={(event) => emailInputValidator(event.target.value)} errorLabel={emailError} />
                <InputDiv inputCategory={InputCategory.NUMBER} onInputListener={(event) => numberInputValidator(event.target.value)} errorLabel={numberError} />

            </div>

            <ButtonDiv prevRoute initial nextRoute={"plans"} />
        </>
    )
}

const InputCategory = {
    TEXT: "TEXT",
    EMAIL: "EMAIL",
    NUMBER: "NUMBER"
}

const InputType = {
    TEXT: "text",
    EMAIL: "email",
    NUMBER: "number"
}

const InputId = {
    TEXT: "name-input",
    EMAIL: "email-input",
    NUMBER: "number-input"
}

const LabelName = {
    TEXT: "Name",
    EMAIL: "Email Address",
    NUMBER: "Phone Number"
}

const InputPlaceholder = {
    TEXT: "Your Name",
    EMAIL: "you@example.com",
    NUMBER: "12345 12345"
}

const InputDiv = (props) => {

    return (

        <div className='label-wrapper flex flex-row justify-between flex-wrap my-[8px]'>

            <label htmlFor={InputId[props.inputCategory]} className='all-label text-[15px] font-[500] duration-200 w-2/5 pl-1'>{LabelName[props.inputCategory]}</label>
            <p className='text-[13px] text-strawberry-red w-3/5 text-right pr-1'>{props.errorLabel}</p>

            <input
                type={InputType[props.inputCategory]}
                id={InputId[props.inputCategory]}
                className='all-input rounded-[7px] border-[2px] border-solid border-cool-gray p-[8px] px-[14px] text-[15px] outline-[none] outline-0 duration-200 w-full'
                onInput={(event) => {
                    if (props.onInputListener) {
                        props.onInputListener(event)
                    }
                }}
                placeholder={InputPlaceholder[props.inputCategory]}
            />
        </div>
    )
};