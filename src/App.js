import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import axios from "axios"
import Search from './components/Search';
import Whyus from './components/Whyus';
import Choose from './components/Choose';
import Footer from './components/Footer';


function App() {
  
  const [api,setApi]=useState([]);
  const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';

  useEffect(()=>{
    axios.get(url).then((res)=>{
      setApi(res.data)
      //  console.log(res.data)
    })
  },[url])
  return (
    <div className='font-Grotesk mx-auto'>
      <Nav/>
    <div className=' max-w-[1180px] mx-auto'>
      <Hero api={api}/>
      <Search api={api}/>
      <Whyus/>
      <Choose/>
      <Footer/>
    </div>
    </div>
  )
}

export default App

