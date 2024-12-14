"use client"

import { Home, Icon, LockIcon, LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux'
import Link from 'next/link'

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
                    <Image src="/main.jpeg" alt='logo' width={40} height={40} priority={true} />

                    <div>
                        <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>
                            PlanIt TEAM
                        </h3>
                        <div className='mt-1 flex items-start gap-2'>
                            <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400' />
                            <p className='text-xs text-gray-500 dark:text-white'>
                                Private
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navbar links here */}
                <nav className='z-10 w-full'>
                    <SidebarLink
                        icon={Home}
                        label="Home"
                        href="/"
                    />
                </nav>
            </div>
        </div>
    )
}

interface SidebarLinkProps {
    href: string
    icon: LucideIcon
    label: string
    // isCollapsed: boolean
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    // isCollapsed
}: SidebarLinkProps) => {
    const pathName = usePathname()
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard")
    // const screenWidth = window.innerWidth
    const [screenWidth, setScreenWidth] = useState(0);

    const dispatch = useAppDispatch()

    // const isSidebarCollapsed = useAppSelector((state) => state.theme.isSidebarCollapsed)

    useEffect(() => {
        // Access window only after component mounts (client-side)
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Link href={href} className='w-full'>
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}`}>
                {isActive && (
                    <div className='absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200' />
                )}

                <Icon className='h-6 w-6 text-gray-800 dark:text-gray-100' />

                <span className={`font-medium text-gray-800 dark:text-gray-100`}>
                    {label}
                </span>
            </div>
        </Link>
    )
}

export default Sidebar