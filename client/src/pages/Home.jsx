import React from 'react'
import Sidebar from '../componenets/Sidebar'
import Main from '../componenets/Main'

function Home() {
    return (
        <div className=' grid grid-cols-[18%_auto] w-full h-screen font-inter text-text-primary'>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home