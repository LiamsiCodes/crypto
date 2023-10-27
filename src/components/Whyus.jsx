import React from 'react'
import {IoIosSave} from "react-icons/io"
import {GiConfirmed,GiReceiveMoney} from "react-icons/gi"
import {BiSelectMultiple} from "react-icons/bi"
import {FaMoneyCheckAlt} from "react-icons/fa"
import {MdInsertDriveFile} from "react-icons/md"
import crp from "../assets/crp.png"

function Whyus() {
  return (
    <div id='choose' className='mt-24 text-white'>
     <h1 className='md:text-6xl text-5xl p-[1px] text-center'>WHY <span className='text-[#D700ED]'> CHOOSE US</span></h1>
     <div className='md:flex gap-12  mx-auto items-center justify-bewteen'>
     <div className='flex p-6 flex-col'>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <IoIosSave className='bg-[#fff] p-1 text-black rounded-lg' size={30}/>
          <h1 className='text-2xl'>CONNECT YOUR WALLET</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>Use Trust Wallet, Metamask or to connect to the app.</p>
      </div>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <BiSelectMultiple className='bg-[#fff] p-1 text-black rounded-lg' size={30}/>
          <h1 className='text-2xl'>SELECT YOUR QUANTITY</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>Upload your crypto and set a title, description and price.</p>
      </div>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <GiConfirmed className='bg-[#fff] p-1 text-black   rounded-lg' size={30}/>
          <h1 className='text-2xl'>CONFIRM TRANSACTION</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>Earn by selling your crypto on our marketplace.</p>
      </div>
      </div>
      
      <div className='flex justify-center'>
        <img src={crp} className='md:w-[370px] w-[270px]' alt="" />
      </div>


      <div className='flex p-6 flex-col'>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <GiReceiveMoney className='bg-white text-black p-1 rounded-lg' size={30}/>
          <h1 className='text-2xl'>RECEIVE YOUR OWN NFTS</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>Invest all your crypto at one place on one platform.</p>
      </div>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <FaMoneyCheckAlt className='bg-white p-1 text-black rounded-lg' size={30}/>
          <h1 className='text-2xl'>TAKE A MARKET TO SELL</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>Discover, collect the right crypto collections to buy or sell.</p>
      </div>
      <div className='bg-[#1B1229] flex flex-col border border-gray-600 mt-16 rounded-2xl px-3 py-8'>
          <div className='flex gap-4 items-center'>
            <MdInsertDriveFile className='bg-white p-1 text-black rounded-lg' size={30}/>
          <h1 className='text-2xl'>DRIVE YOUR COLLECTION</h1>
          </div>
          <p className='text-xl ml-11 mt-4 max-w-[270px]'>We make it easy to Discover, Invest and manage.</p>
      </div>
      </div>


     </div>
    </div>
  )
}

export default Whyus

