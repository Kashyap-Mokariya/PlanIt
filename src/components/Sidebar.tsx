"use client"

import React, { useState } from "react";
import { Home, Briefcase, Search, Settings, User, Users, Menu, X, LucideIcon, LockIcon, ChevronUp, ChevronDown, AlertCircle, ShieldAlert, AlertTriangle, AlertOctagon, Layers3 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "./redux";
import { setIsSidebarCollapsed } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "@/styles/globals.css";

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(false)
    const [showPriority, setShowPriority] = useState(false)

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.theme.isSidebarCollapsed);

    return (
        <>
            {/* Sidebar Container */}
            <div
                className={`fixed top-0 left-0 h-full bg-white dark:bg-black shadow-lg transition-all duration-300 z-40 ${isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"
                    } w-64`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-6 py-4 shadow-md">
                    <h1 className="text-lg font-bold text-gray-800 dark:text-white">PlanIt</h1>
                    <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
                        <X className="h-6 w-6 text-gray-800 dark:text-white" />
                    </button>
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

                {/* Sidebar Navigation Links */}
                <nav className="z-10 w-full">
                    <SidebarLink icon={Home} label="Home" href="/" />
                    <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
                    <SidebarLink icon={Search} label="Search" href="/search" />
                    <SidebarLink icon={Settings} label="Settings" href="/settings" />
                    <SidebarLink icon={User} label="Users" href="/users" />
                    <SidebarLink icon={Users} label="Teams" href="/teams" />
                </nav>

                {/* Projects Section */}
                <div>
                    <button
                        onClick={() => setShowProjects(prev => !prev)}
                        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                    >
                        <span>Projects</span>
    
                        {showProjects ? (
                            <ChevronUp className="h-5 w-5" />
                        ) : (
                            <ChevronDown className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Priorities Section */}
                <div>
                    <button
                        onClick={() => setShowPriority(prev => !prev)}
                        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                    >
                        <span>Priority</span>
    
                        {showPriority ? (
                            <ChevronUp className="h-5 w-5" />
                        ) : (
                            <ChevronDown className="h-5 w-5" />
                        )}
                    </button>

                    {showPriority && (
                        <>
                            <SidebarLink icon={AlertCircle} label="Urgent" href="/priority" />
                            <SidebarLink icon={ShieldAlert} label="High" href="/priority/high" />
                            <SidebarLink icon={AlertTriangle} label="Medium" href="/priority/medium" />
                            <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" />
                            <SidebarLink icon={Layers3} label="Backlog" href="/priority/backlog" />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;  // Changed this line
    label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {

    const pathName = usePathname()
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard")

    return (

        <Link href={href} className='w-full'>
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 justify-start px-8 py-3 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}`}>
                {isActive && (
                    <div className='absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200' />
                )}

                <Icon className='h-6 w-6 text-gray-800 dark:text-gray-100' />

                <span className={`font-semibold text-gray-800 dark:text-gray-100`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};

export default Sidebar;