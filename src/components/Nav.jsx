import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineTwitter} from 'react-icons/ai'
import { BsDiscord} from 'react-icons/bs'
import {Link} from "react-scroll";

function Nav() {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div  className='text-white md:px-12 shadow-2xl bg-[#0F051D] sticky top-0'>
       <div className='flex py-12 px-3 items-center justify-between'>
         <h1 className='md:text-3xl text-2xl'>CoinTracker</h1>
         <nav className=''>
            <ul className='md:flex hidden  cursor-pointer text-lg capitalize items-center gap-7'>
                <Link to='home' spy={true} smooth={true} offset={-160} duration={500} className='hover:text-[#D700ED] duration-500'>Home</Link>
                <Link to='market' spy={true} smooth={true} offset={-130} duration={500} className='hover:text-[#D700ED] duration-500'>market</Link>
                <Link to='choose' spy={true} smooth={true} offset={-150} duration={500} className='hover:text-[#D700ED] duration-500'>choose us</Link>
                <Link to='join' spy={true} smooth={true} offset={-150} duration={500} className='hover:text-[#D700ED] duration-500'>join us</Link>
            </ul>
         </nav>
         <div className='flex items-center cursor-pointer  md:-mr-0 -mr-[19px]  gap-2'>
         <Link href="https://twitter.com/CoinMarketCap" target='_blank'>
              <AiOutlineTwitter  size={30}/>
        </Link>
        <Link href="https://discord.com/CoinMarketCap" target='_blank'>
              <BsDiscord  size={30}/>
        </Link>
         </div>
        
        <div className='flex cursor-pointer md:hidden items-center'>
            <AiOutlineMenu size={30} onClick={handleNav}/>
        </div>

        <div onClick={handleNav} className={nav ? 'md:hidden bg-gray-200 text-black fixed h-screen w-[350px] duration-500 ease-out top-0 left-0':'bg-gray-200 text-black duration-500 ease-in fixed h-screen w-[350px] top-0 left-[-140%]'}>
            <div className='p-3 m-7 max-w-[50px] flex items-center justify-center rounded-full shadow-xl cursor-pointer'>
            <AiOutlineClose size={30} onClick={handleNav}/>
            </div>
        <ul  className='capitalize flex flex-col cursor-pointer text-2xl py-[100px] text-center'>
               <Link onClick={handleNav} to='home'  spy={true} smooth={true} offset={-160} duration={500} className='py-5 hover:text-[#D700ED] duration-500'>Home</Link>
                <Link onClick={handleNav} to='market'spy={true} smooth={true} offset={-130} duration={500}  className='py-5 hover:text-[#D700ED] duration-500'>market</Link>
                <Link onClick={handleNav} to='choose' spy={true} smooth={true} offset={-150} duration={500} className='py-5 hover:text-[#D700ED] duration-500'>choose us</Link>
                <Link onClick={handleNav} to='join'py={true} smooth={true} offset={-150} duration={500} className='py-5 hover:text-[#D700ED] duration-500'>join us</Link>
            </ul>

        </div>

       </div>
    </div>
  )
}

export default Nav
