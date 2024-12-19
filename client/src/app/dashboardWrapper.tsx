"use client";

import Navbar from "@/components/Navbar";
import StoreProvider, { useAppSelector } from "@/components/redux";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector((state) => state.theme.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-dark-bg text-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className={`flex flex-1 flex-col transition-all duration-300 ${isSidebarCollapsed ? "" : "md:ml-64"}`}>
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    );
};

export default DashboardWrapper;
