import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <div className="px-5 min-h-screen">
      <section class="body-font">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">ROG Zephyrus M16 
            <br/>GU604VI-N4062W
              
            </h1>
            <p class="mb-8 leading-relaxed"> 16" WQHD | i9-13900H | RTX4070 | 32GB DDR5 | 1TB SSD | Win11 | 2Y <span className='text-cyan-500'>【Same Day Delivery】</span></p>
            <div class="flex justify-center">
              <button onClick={()=> navigate('/product')} class="inline-flex bg-cyan-700 text-white border-0 py-2 px-10 focus:outline-none hover:bg-cyan-800 rounded-lg text-lg">Buy Now</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="/images/image2.jpeg" />
          </div>
        </div>
      </section>
    </div>
  )
}
