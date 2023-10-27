import React, { useState } from 'react'

function Search({api}) {
 const [searchIcon,setSearchIcon]=useState("")

  return (
    <div className=" my-12 p-2 overflow-y-auto mx-auto" id='market'>
     {/* search */}
     <div className='flex flex-col md:flex-row justify-center md:gap-52 pt-4 pb-6 '>
        <h1 className='text-xl md:text-3xl my-1 text-white md:text-left text-center font-bold'>Market Update</h1>
        <input
        onChange={(e)=>setSearchIcon(e.target.value)}
        type="text" placeholder='Search...' className='text-black  px-4 py-2 border-none outline-none bg-[#f1f1f1] rounded-2xl shadow-xl'/>
     </div>
    {/* coins section */}
    <div className='flex max-auto  items-center justify-center'>
        <table className=''>
        <thead className='text-white'>
            <tr className='border-b '>
            <th className='table-cell md:hidden'></th>
            <th className='text-left'>#coin</th>
            <th className='px-4'></th>
            <th className='px-4'>price</th>
            <th className='px-4'>24h</th>
            <th className='px-4 hidden md:flex'>24h volume</th>
            <th className='px-4'>High 24h</th>
            <th className='px-4'>Low 24h</th>
            </tr>
        </thead>
        <tbody>
        {api.filter((value)=>{
               if(searchIcon === "" ){
                   return value
                } else if( value.name.toLowerCase().includes(searchIcon.toLowerCase())
                ){
                    return value
                }
            }).map((api,cls)=>(
            <tr key={cls} className='border-b mx-auto overflow-hidden h-[80px]'>
                      <td className='p-2 text-white'>{api.market_cap_rank}</td>
                      <td className='p-2'>
                        <div className='flex items-center'>
                            <img src={api.image} className='rounded-full w-6' alt="" />
                            <p className='ml-1 hidden text-white md:table-cell'>{api.name}</p>
                        </div>
                      </td>
                        <td className='text-center table-cell md:hidden'>{api.symbol}</td>
                        <td className='text-center text-white'>{api.current_price}$</td>
                        <td className='text-center text-white '>{api.price_change_24h > 0 ? (<p className='text-green-500'>{api.price_change_24h.toFixed(2)}%</p>):(<p className='text-red-500'>{api.price_change_24h.toFixed(2)}%</p>) }</td>
                        <td className='text-center text-white hidden md:table-cell'>{api.total_volume.toLocaleString(7)}</td>
                        <td className='text-center text-white'>{api.high_24h}$</td>
                        <td className='text-center text-white'>{api.low_24h}$</td>
                     </tr>
                ))}
        </tbody>
        </table>
                </div>
    </div>
  )
}

export default Search

