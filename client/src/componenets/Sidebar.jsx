import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { GrTask, GrSchedules } from 'react-icons/gr'
import { AiOutlineSchedule } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'


function Sidebar() {
    return (
        <div className=' p-6 grid grid-rows-[20%_auto] gap-8 justify-center  w-full h-full'>
            <section className=' w-32 h-32  border border-black'>
                image
            </section>
            <ul className=' flex flex-col gap-2 p-2 w-full items-center font-bold'>
                <button className=' flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start hover:text-accent  focus:bg-accent focus:text-white duration-500 cursor-pointer'>
                    <LuLayoutDashboard />
                    <h1>Dashboard</h1>
                </button>
                <button className=' flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start hover:text-accent  focus:bg-accent focus:text-white duration-500 cursor-pointer'>
                    <FiUsers />
                    <h1>Client</h1>
                </button>
                <button className=' flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start hover:text-accent  focus:bg-accent focus:text-white duration-500 cursor-pointer'>
                    <HiOutlineDocumentText />
                    <h1>Cases</h1>
                </button>
                <button className=' flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start hover:text-accent  focus:bg-accent focus:text-white duration-500 cursor-pointer'>
                    <FaTasks />
                    <h1>Tasks</h1>
                </button>
                <button className=' flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start hover:text-accent  focus:bg-accent focus:text-white duration-500 cursor-pointer'>
                    <AiOutlineSchedule />
                    <h1>Appointment</h1>
                </button>
            </ul>
            <button className='flex gap-4 w-full max-h-12 py-3 px-6  rounded-xl  items-center justify-center text-white font-semibold bg-black'>
                LOGOUT
            </button>
        </div>
    )
}

export default Sidebar