import React from 'react'
import {Link} from "react-router-dom"
function Choose() {
  return (
    <div id='join' className='mt-40 text-center  text-white'>
      <p className='uppercase text-7xl md:text-8xl'>join us via <br /> <span className='text-[#D700ED]'>discord</span></p>
      <p className='mt-6 text-xl tracking-widest'>Invest and manage all your crypto at one place.</p>
        <Link to="https://discord.com/" target='_blank'>
      <div className='flex mt-8 justify-center'>
            <button className='bg-[#452d6b] rounded-full px-6 py-4 capitalize hover:text-[#D700ED] duration-500 text-xl'>join via discord</button>
      </div>
        </Link>
    </div>
  )
}

export default Choose
