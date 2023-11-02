import React from 'react'

export default function StudentSection() {
  return (
    <section class="bg-yellow-50">
    <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
        
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Experience the best of both worlds</h1>
        <p class="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Our laptop is more than just a device; it's a lifestyle. It seamlessly transitions from a reliable study partner during the day to a gaming powerhouse in the evening. Whether you're completing assignments or embarking on epic gaming adventures, this laptop ensures you're always at the top of your game.</p>
    </div>

    <div className='flex justify-center pb-10'>
        <img className='rounded-lg sm:h-[500px] h-52 w-3/4' src="images/studentlap.jpg" alt="" />
    </div>

    <div className='px-4 mx-auto max-w-screen-xl text-center pb-6'>
        <div className="mb-4 text-left mt-4">
          <span className="text-xl font-semibold text-orange-500">Powerful Performance: </span>
          <span className="text-gray-600">
          Say goodbye to sluggish load times and multitasking delays. Our laptop features cutting-edge processors and ample RAM to ensure smooth and efficient performance, allowing you to breeze through tasks and assignments.          </span>
        </div>
        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Vivid Displays:  </span>
          <span className="text-gray-600">
          Immerse yourself in crystal-clear visuals with our high-resolution displays. Whether you're reading textbooks, watching educational videos, or conducting research, you'll enjoy a superior viewing experience.</span> </div>

        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Extended Battery Life: </span>
          <span className="text-gray-600">Worried about running out of power during a lecture or study session? Our laptop boasts an extended battery life, ensuring that you stay productive without interruptions.</span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-xl font-semibold text-orange-500">Robust Connectivity: </span>
          <span className="text-gray-600">
          Stay connected with lightning-fast Wi-Fi and a range of ports for seamless file transfers and connectivity to your peripherals.
          </span>
        </div>
      </div>
</section>
  )
}
