import React from 'react'
import { AiOutlineTwitter} from 'react-icons/ai'
import { BsDiscord, BsFacebook, BsYoutube} from 'react-icons/bs'
import {Link} from "react-router-dom"



function Footer() {
  return (
    <div className='text-white mt-28'>
         <div className='flex items-center justify-center mt-20 gap-5'>
        <Link to="https://facebook.com/CoinMarketCap" target='_blank'>
        <BsFacebook size={31}/>
        </Link>

        <Link to="https://discord.com/CoinMarketCap" target='_blank'>
        <BsDiscord size={31}/>
        </Link>

        <Link to="https://twitter.com/CoinMarketCap" target='_blank'>
        <AiOutlineTwitter  size={31}/>
        </Link>

        <Link to="https://youtube.com/CoinMarketCap" target='_blank'>
        <BsYoutube size={31}/>
        </Link>
     </div>
     <div className='flex flex-col p-2 items-center '>
        <h1 className='font-bold mt-5 text-xl text-center'>© 2023 <span className='italic'>CoinTracker</span>. All rights are reserved</h1>
        <h1 className='font-bold mt-5 italic text-xl'>Powered by CoinGecko</h1>
     </div>
    </div>
  )
}

export default Footer
