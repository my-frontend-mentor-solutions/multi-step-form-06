import React, { useEffect } from 'react'

export default function Notice() {
  
    useEffect(() => {
        let noticeDiv = document.getElementById("notice-container");
        let noticeCloseBtn = document.getElementById("notice-close-btn");
        
        noticeCloseBtn.addEventListener('click', () => {
            noticeDiv.style.display = "none";
        })
    })

    return (
        <div className={`fixed lg:w-[60%] w-[90%] shadow-2xl z-10 top-[25%] lg:top-0`} id='notice-container'>
            <div className=' bg-light-blue rounded-lg flex flex-row w-full flex-wrap'>
                <p className='lg:w-[90%] w-[80%] lg:text-[36px] text-[30px] px-7 text-purplish-blue lg:px-12 pt-3'>Notice!</p>
                <p className='pt-3 lg:w-[10%] w-[20%] text-[30px] text-center hover:cursor-pointer hover:text-[#0000007e] duration-200' id='notice-close-btn' >x</p>
                <p className='w-full lg:p-12 lg:pt-7 pt-3 p-7 text-marine-blue lg:text-[20px] text-[17px]'>
                    Hey there! This webpage is for practice purpose only and doesn't store any personal details. Feel free to explore and test this site. Use your creative minds to find loopholes, bugs and errros and make the developer aware about them. <br/><br /> Have a great day : )
                </p>
            </div>
        </div>
    )
}
