import React from 'react'

const Footer = () => {
  return (
    <div className='bg-bgDark '>
        <div className='w-11/12 max-w-[1260px] mx-auto flex-col mt-5'>
            <div className='text-[#f3f4f6] text-3xl py-3 ml-3'>
                Programming Contests
            </div>

            <div className='text-[#d1d5db] py-3 ml-3'>This is a simple website, where any person can get updates of upcoming Programming contests.</div>

            <div className='bg-[#d1d5db] h-[1px] mx-3 '></div>

            <div className='text-[#d1d5db] mx-3 pb-5 pt-3'>A single platform to manage different websites. Now its easier to get timings and all other imp information regarding the contests.</div>
            
        </div>
    </div>
  )
}

export default Footer