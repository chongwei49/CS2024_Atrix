import React, { useState } from 'react'
import ProductDiscription from '../components/ProductDiscription';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState("/images/image1.jpeg");

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };
  return (
    <div>
      <section class="body-font overflow-hidden mt-6">
        <div class="container px-5 py-12 mx-auto">
          <div class=" mx-auto flex sm:flex-nowrap flex-wrap">

            <div className="grid gap-4 sm:w-2/6">
              <div>
                <img className="h-[400px] w-[600px] max-w-full border border-gray-200 rounded-lg" src={selectedImage} alt="" />
              </div>
              <div className="grid grid-cols-6 gap-4">
                {[
                  "/images/image1.jpeg",
                  "/images/image2.jpeg",
                  "/images/image3.jpeg",
                  "/images/image4.jpeg",
                  "/images/image5.jpeg",
                  "/images/image6.jpeg",
                ].map((smallImage) => (
                  <div key={smallImage}>
                    <img
                      className={`h-auto cursor-pointer max-w-full rounded-lg ${smallImage === selectedImage ? 'border-2 border-cyan-700' : 'border border-gray-200'}`}
                      src={smallImage}
                      alt=""
                      onClick={() => handleImageClick(smallImage)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div class="lg:w-4/6 w-full lg:pl-10  mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">Atrix Official Store</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">ROG Zephyrus M16 GU604VI-N4062W | 16" WQHD | i9-13900H | RTX4070 | 32GB DDR5 | 1TB SSD | Win11 | 2Y</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-cyan-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-cyan-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-cyan-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-cyan-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-cyan-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4.6 Rating</span>
                </span>
                <span class="flex ml-3 pl-3 text-cyan-700 py-2 border-l-2 border-gray-200 space-x-2s">
                  【Same Day Delivery】
                </span>
              </div>
              <p class="leading-relaxed">Zephyrus M16 GU604VI-N4062W

                16" WQHD (2560x1440) IPS Level ROG Nebula Display.

                Intel® Core™ i9-13900H Processor 2.6 GHz (24M Cache, up to 5.4 GHz, 14 cores: 6 P-cores and 8 E-cores).

                NVIDIA® GeForce RTX™ 4070.

                32GB DDR5-4800 SO-DIMM.

                512GB M.2 NVMe™ PCIe® 3.0 SSD.

                2 Year ASUS Warranty.</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex items-center">
                  <span class="mr-3 text-cyan-600">Storage</span>
                  <div class="relative">
                    <select class="rounded border cursor-pointer appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1 TB</option>
                      <option>2 TB</option>

                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="flex ml-6 items-center">
                  <span class="mr-3 text-cyan-700">RAM</span>
                  <div class="relative">
                    <select class="rounded border cursor-pointer appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>32 GB DDR5</option>
                      <option>64 GB DDR5</option>

                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row">
                <span class="title-font font-medium text-2xl">$4,598.00</span> 
                <button class="flex sm:ml-auto border border-cyan-700 mt-3 sm:mt-0 hover:text-white py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded">Add to Cart</button>
                <button onClick={()=> navigate('/checkout')} class="flex sm:ml-5 mt-3 sm:mt-0 text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded">Checkout</button>

              </div>
            </div>
          </div>
          <ProductDiscription />
        </div>
      </section>
    </div>
  )
}
