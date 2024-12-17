import React from "react";
import { Menu, Search, Settings, Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from './redux'
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import Link from "next/link";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.theme.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black shadow-md">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                {!isSidebarCollapsed ? null : (
                    <button
                        onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
                        className="fixed top-2.5 left-4 z-50 p-2 rounded-md bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
                    >
                        <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
                    </button>
                )}
                <div className={`relative flex items-center transition-all duration-300 ${isSidebarCollapsed ? "ml-[45px]" : "lg:ml-[0px] ml-[45px]"}`}>
                    <Search className="absolute left-3 h-5 w-5 text-gray-500 dark:text-white" />
                    <input
                        className="w-64 rounded-full bg-gray-100 py-2 pl-10 text-sm text-gray-700 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <button onClick={() => dispatch(setIsDarkMode(!isDarkMode))}>
                    {isDarkMode ? (
                        <Sun className="h-6 w-6 text-white" />
                    ) : (
                        <Moon className="h-6 w-6 text-gray-800 dark:text-white" />
                    )}
                </button>
                <Link href="/settings">
                    <Settings className="h-6 w-6 text-gray-800 dark:text-white" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
