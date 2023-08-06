import React from 'react'

export default function Content04() {
  return (
    <div>
        <SummaryDiv  />
    </div>
  )
}

const SummaryDiv = () => {
    return (
        <div className='flex flex-col '>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                    <p>Arcade (Monthly)</p>
                    <p>Change</p>
                </div>
                <p>₹119/month</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p>Online Service</p>
                <p>+₹29/month</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p>Larger Storage</p>
                <p>+₹39/month</p>
            </div>
        </div>
    )
};
