import React from 'react'
import TeamSection from '../components/TeamSection'

export default function AboutUs() {
    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900">About Us</h1>
                       
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto text-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p class="leading-relaxed text-lg">Welcome to Atrix Official Store, where innovation meets elegance in the world of laptops.

                            At Atrix, we're not just another laptop brand; we're a team of passionate tech enthusiasts on a mission to redefine your computing experience. Our journey began with a vision to create laptops that seamlessly blend cutting-edge technology with impeccable design.

                            We are committed to delivering laptops that stand out in terms of quality and performance. Each Atrix laptop is a result of meticulous craftsmanship and rigorous quality control.

                            Technology evolves, and so do we. Atrix is dedicated to staying at the forefront of innovation, ensuring our laptops are equipped with the latest features and hardware to cater to your needs .</p>
                        <span class="inline-block h-1 w-10 rounded bg-cyan-700 mt-8 mb-6"></span>
                        {/* <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2> */}
                        <p class="text-gray-900 font-medium title-font">Senior Product Designer</p>
                    </div>
                    {/* <TeamSection /> */}
                </div>
            </section>
        </div>
    )
}
