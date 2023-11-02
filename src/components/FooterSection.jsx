import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterSection() {
    return (
        <div>

            <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                     

                        <a href="/" class="flex items-center mb-4 sm:mb-0">
                      
                        <img src="/atrix-logo.png" className="" width={150} alt="Flowbite React Logo" />
                            
                        </a>
                        
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                            
                                <a href="/aboutus" class="mr-4 hover:underline md:mr-6 ">About Us</a>
                               
                            </li>
                            <li>
                                
                                <a href="/privacy-policy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                                
                            </li>
                            <li>
                               
                                <a href="contact-us" class="mr-4 hover:underline md:mr-6 ">Contact Us</a>
                            
                            </li>
                            <li>
                            
                                <a href="/newsfeed" class="hover:underline">News Feed</a>
                             
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Atrix™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}
