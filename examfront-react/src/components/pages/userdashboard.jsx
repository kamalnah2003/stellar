import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './navbar'
import logo from '../../assets/images/log.png'

export default function UserDashboard() {
    return (
       <> 
              <Navbar />
 {/* Side Bar Car */}
 <div class=" grid  grid-cols-2"> 
   
           {/* Side Card For Details */}
 

<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">
   <div class="py-8   w-64  mx-4  ">           
         <div class="  w-full max-w-md px-auto bg-white shadow-xl rounded-lg border-2  p-8 sticky">
            <div class="flex justify-between items-center mb-4">
               <h5 class="text-xl font-bold leading-none text-black dark:text-black">Menu</h5>
               
            </div>
            <div class="flow-root">
               <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           {/* <div class="flex-shrink-0">
                                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                           </div> */}
                           <div class="flex-1 min-w-0">
                                 <p class="text-sm font-medium  truncate  text-black dark:text-black ">
                                    Neil Sims
                                 </p>
                                 
                           </div>
                           <div class="inline-flex items-center text-base font-semibold  text-black dark:text-black">
                                 $320
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           {/* <div class="flex-shrink-0">
                                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                           </div> */}
                           <div class="flex-1 min-w-0">
                                 <p class="text-sm font-medium  truncate text-black dark:text-black">
                                    Bonnie Green
                                 </p>
                                 
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 text-black">
                                 $3467
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           {/* <div class="flex-shrink-0">
                                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image">
                           </div> */}
                           <div class="flex-1 min-w-0">
                                 <p class="text-sm font-medium  truncate  text-black dark:text-black">
                                    Michael Gough
                                 </p>
                                
                           </div>
                           <div class="inline-flex items-center text-base font-semibold  text-black dark:text-black">
                                 $67
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           {/* <div class="flex-shrink-0">
                                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image">
                           </div> */}
                           <div class="flex-1 min-w-0">
                                 <p class="text-sm font-medium truncate text-black">
                                    Lana Byrd
                                 </p>
                               
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-black">
                                 $367
                           </div>
                        </div>
                     </li>
                     <li class="pt-3 pb-0 sm:pt-4">
                        <div class="flex items-center space-x-4">
                           {/* <div class="flex-shrink-0">
                                 <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                           </div> */}
                           <div class="flex-1 min-w-0">
                                 <p class="text-sm font-medium truncate text-black">
                                    Thomes Lean
                                 </p>
                                
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-black">
                                 $2367
                           </div>
                        </div>
                     </li>
               </ul>
            </div>
         </div>
</div>
</div>

  <div>
<div class="w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li class="mr-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">About</button>
        </li>
        <li class="mr-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">Services</button>
        </li>
        <li class="mr-2">
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">Facts</button>
        </li>
    </ul>
    <div id="defaultTabContent">
        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 hidden" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p class="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <div href="#" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
           
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2">
                   
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li class="flex space-x-2">
                  
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2">
                   
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2">
                    
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Limitless business automation</span>
                </li>
            </ul>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
            </dl>
        </div>
    </div>
</div>
</div>

                        </div>
  </div>
  <div class="row-span-2 col-span-2 ...">03</div>


     {/* Side Bar Car */}

    </>
    )
}

