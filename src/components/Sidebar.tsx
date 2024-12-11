"use client"

import { LockIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Sidebar = () => {

    const [showProjects, setShowProjects] = useState(true)
    const [showPriority, setShowPriority] = useState(true)

    const sidebarClasses = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`

    return (
        <div className={sidebarClasses}>
            <div className=' flex h-[100%] w-full flex-col justify-start'>

                {/* Need to put out logo here */}
                <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>
                        PlanIt
                    </div>
                </div>

                {/* Teams Section */}
                <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-6 py-4 dark:border-gray-700'>
                    <Image src="/Picwish_General_HD_2.jpeg" alt='logo' width={40} height={40} className='' />

                    <div>
                        <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>
                            PlanIt TEAM
                        </h3>
                        <div className='mt-1 flex items-start gap-2'>
                            <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400' />
                            <p className='text-xs text-gray-500'>
                                Private
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navbar links here */}
                
            </div>
        </div>
    )
}

export default Sidebar