import Navbar from '@/components/Navbar'
// import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

type Props = {}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
            {/* Sidebar Code here */}
            {/* <Sidebar /> */}
            <main className='dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64'>
                {/* Navbar code here */}
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardWrapper