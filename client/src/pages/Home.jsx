import React from 'react'
import Sidebar from '../componenets/Sidebar'
import Main from '../componenets/Main'

function Home() {
    return (
        <div className=' grid grid-cols-[18%_auto] w-full h-screen'>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home