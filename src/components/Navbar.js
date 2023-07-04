import React from 'react'
import logo from '../images/logo1.png'
const Navbar = () => {
  return (
    <div>
        <nav className='bg-bgDark py-2  '>
            <div className='flex items-center w-11/12 max-w-[1260px] mx-auto'>
                <img src={logo} height='25px'></img>
                <div className='text-[#e5e7eb] text-2xl font-semibold '>InfoCon</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar