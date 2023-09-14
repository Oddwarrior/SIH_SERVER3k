import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <div className='py-6 pr-6 h-screen w-full' >
            <div className=' h-full w-full p-4 bg-background-secondary rounded-xl overflow-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Main