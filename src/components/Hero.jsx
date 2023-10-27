import React, { useEffect, useState } from 'react'
import eth from "../assets/eth.png"
import btc from "../assets/btc.png"
import axios from 'axios';


function Hero() {
  const [coin,setCoin]=useState([]);
  const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en';

  useEffect(()=>{
    axios.get(url).then((res)=>{
      setCoin(res.data)
      //  console.log(res.data)
    })
  },[url])
  return (
    <div className='text-white' id='home'>
        <div className=' hidden md:flex p-4 mt-8 items-center justify-between'>
        <img src={btc} className='w-16   cursor-pointer hover:scale-125 duration-500' alt="" />
        <img src={eth} className='w-16   cursor-pointer hover:scale-125 duration-500' alt="" />
        </div>
      <p className='text-center mt-16 p-2 text-5xl md:text-8xl'>
         TRACK AND TRADE <br />
        <span className='text-[#5F00F7]'> CRYPTO </span>
        <span className='text-[#D700ED]'> CURRENCIES</span></p>
         <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2'>
         {coin.map((coin,key)=>(
        <div key={key} className='mt-20'>
          <div className='flex justify-center'>
           <img className='lg:w-28 w-24 hover:scale-110 duration-500 cursor-pointer' src={coin.image} alt="" />
          </div>
           <div className='flex flex-col'>
            <div className='flex justify-center gap-3 mt-3 items-center'>
              <span className='text-xl'>{coin.name}</span>
              <span className='text-lg '>{coin.price_change_24h > 0 ? (<p className='text-green-500'>{coin.price_change_24h.toFixed(2)}%</p>):(<p className='text-red-500'>{coin.price_change_24h.toFixed(2)}%</p>) }</span>
            </div>
            <span className='text-xl mt-1 text-center'>{coin.current_price}  $</span>
           </div>
         </div>
         ))}
        </div>
    </div>
  )
}

export default Hero
