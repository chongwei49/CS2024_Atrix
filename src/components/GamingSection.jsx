import React from 'react'


export default function GamingSection() {
  return (

    <section class="bg-cyan-50">
      <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
        <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-cyan-700 bg-cyan-800 rounded-full dark:bg-blue-900">
          <span class="text-xs bg-cyan-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm text-white font-medium">Branded Gaming Laptop For Pro Gamers</span>

        </div>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Are you a dedicated gamer seeking high-performance hardware to conquer virtual realms? Look no further, as our versatile laptop is designed to meet the needs of both students and gamers.</p>

      </div>

      <div className='flex justify-center pb-10'>
        <img className='rounded-lg sm:h-[500px] h-52 w-3/4' src="images/Gaming poster.jpg" alt="" />
      </div>
      <div className='px-4 mx-auto max-w-screen-xl text-center pb-6'>
        <div className="mb-4 text-left mt-4">
          <span className="text-xl font-semibold text-orange-500">High Refresh Rate Displays: </span>
          <span className="text-gray-600">
            Our laptops offer high refresh rate displays, ensuring smooth, tear-free gameplay. You'll be fully immersed in the action, whether you're exploring fantasy worlds or battling opponents online.
          </span>
        </div>
        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Gaming-Ready Graphics: </span>
          <span className="text-gray-600">
            Elevate your gaming experience with dedicated graphics cards that deliver stunning visuals and exceptional frame rates. Enjoy a competitive edge with no compromises on image quality.          </span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Customizable RGB Backlit Keyboards: </span>
          <span className="text-gray-600">
            Personalize your gaming setup with customizable RGB backlit keyboards. Enhance your gaming atmosphere and set the mood for intense gameplay.          </span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Upgradable Hardware: </span>
          <span className="text-gray-600">
            Stay future-proof with upgradable hardware options. You can easily enhance your laptop's performance as new games and software demands evolve.
          </span>
        </div>
      </div>
    </section>

  )
}
