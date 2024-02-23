import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function ButtonDiv(props) {

    const isReadyToProceed = props.validate ? props.expectedData !== "" : true;
    const navigate = useNavigate();
    const buttonColor = isReadyToProceed ? "bg-marine-blue" : "bg-cool-gray";
    const nextRoute = isReadyToProceed ? "/" + props.nextRoute : "";

    return (
        <div className='lg:m-0 lg:mt-14 lg:p-0 lg:static lg:mx-10 lg:w-auto flex items-center fixed left-0 bottom-0 bg-white w-screen justify-between p-5'>
            {
                props.prevRoute && <button type="button" className='text-cool-gray hover:text-marine-light-blue duration-200' onClick={() => navigate(-1)} >{props.initial ? "" : "Previous Step"}</button>
            }
            {
                props.nextRoute && 
                <Link
                    type="button"
                    onClick={() => {
                            if (props.isReadyListener) props.isReadyListener(isReadyToProceed);
                        }
                    }
                    className={`text-extra-light-gray ${buttonColor} px-[18px] py-[10px] rounded-lg hover:bg-marine-light-blue duration-200`}
                    to={nextRoute}
                >
                    {props.final ? "Confirm" : "Next Step"}
                </Link>
            }
        </div>
    )
}