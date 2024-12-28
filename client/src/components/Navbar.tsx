// import React from "react";
// import { Menu, Search, Settings, Sun, Moon } from "lucide-react";
// import { useAppDispatch, useAppSelector } from './redux'
// import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
// import Link from "next/link";

// const Navbar = () => {
//     const dispatch = useAppDispatch();
//     const isSidebarCollapsed = useAppSelector((state) => state.theme.isSidebarCollapsed);
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

//     return (
//         <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black shadow-md">
//             {/* Left Side */}
//             <div className="flex items-center gap-4">
//                 {!isSidebarCollapsed ? null : (
//                     <button
//                         onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
//                         className="fixed top-2.5 left-4 p-2 rounded-md bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
//                     >
//                         <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
//                     </button>
//                 )}
//                 <div className={`relative flex items-center transition-all duration-300 ${isSidebarCollapsed ? "ml-[45px]" : "lg:ml-[0px] ml-[45px]"}`}>
//                     <Search className="absolute left-3 h-5 w-5 text-gray-500 dark:text-white" />
//                     <input
//                         className="w-64 rounded-full bg-gray-100 py-2 pl-10 text-sm text-gray-700 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white"
//                         type="search"
//                         placeholder="Search..."
//                     />
//                 </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center gap-4">
//                 <button onClick={() => dispatch(setIsDarkMode(!isDarkMode))}>
//                     {isDarkMode ? (
//                         <Sun className="h-6 w-6 text-white" />
//                     ) : (
//                         <Moon className="h-6 w-6 text-gray-800 dark:text-white" />
//                     )}
//                 </button>
//                 <Link href="/settings">
//                     <Settings className="h-6 w-6 text-gray-800 dark:text-white" />
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "./redux";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.theme.isSidebarCollapsed,
    );
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black transition-all duration-300">
            {/* Search Bar */}
            <div className="flex items-center gap-8">
                {!isSidebarCollapsed ? null : (
                    <button
                        onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
                    >
                        <Menu className="h-8 w-8 dark:text-white" />
                    </button>
                )}
                <div className="relative flex h-min w-[200px]">
                    <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
                    <input
                        className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center">
                <button
                    onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
                    className={
                        isDarkMode
                            ? `rounded p-2 dark:hover:bg-gray-700`
                            : `rounded p-2 hover:bg-gray-100`
                    }
                >
                    {isDarkMode ? (
                        <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
                    ) : (
                        <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
                    )}
                </button>
                <Link
                    href="/settings"
                    className={
                        isDarkMode
                            ? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
                            : `h-min w-min rounded p-2 hover:bg-gray-100`
                    }
                >
                    <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
                </Link>
                <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
            </div>
        </div>
    );
};

export default Navbar;
