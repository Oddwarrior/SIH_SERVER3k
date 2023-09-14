import React, { useState, useEffect } from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import { Link, NavLink, useLocation } from 'react-router-dom'

import pfp from '../assets/default-pfp.png'

function Sidebar() {
    const [path, setPath] = useState('dashboard');

    return (
        <div className=' p-6 pt-12 grid grid-rows-[20%_auto] gap-6 justify-center  w-full h-full'>
            <section className=' w-full flex  flex-col gap-2 justify-center items-center'>
                <img className='w-20 rounded-full object-contain' src={pfp} />
                <section>
                    <h1 className='text-sm font-semibold'>Shashank Jagtap</h1>
                    <h1 className=' text-xs  text-text-secondary font-semibold'>ID : ASW1YEF233</h1>
                </section>
            </section>
            <ul className=' flex flex-col gap-2 p-2 w-full items-center font-bold'>
                <NavLink
                    to='/dashboard'
                    className={` flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start duration-500 ${path === 'dashboard' ? 'bg-accent text-white ' : ' hover:text-accent '}`}
                    onClick={() => setPath('dashboard')}
                >
                    <LuLayoutDashboard />
                    <h1>Dashboard</h1>
                </NavLink>

                <Link to='/cases'
                    className={` flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start duration-500 ${path === 'cases' ? 'bg-accent text-white ' : ' hover:text-accent '}`}
                    onClick={() => setPath('cases')}
                >
                    <HiOutlineDocumentText />
                    <h1>Cases</h1>
                </Link>

                <Link
                    to='/clients'
                    className={` flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start duration-500 ${path === 'clients' ? 'bg-accent text-white ' : ' hover:text-accent '}`}
                    onClick={() => setPath('clients')}
                >
                    <FiUsers />
                    <h1>Client</h1>
                </Link>


                <Link to='/tasks'
                    className={` flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start duration-500 ${path === 'tasks' ? 'bg-accent text-white ' : ' hover:text-accent '}`}
                    onClick={() => setPath('tasks')}>
                    <FaTasks />
                    <h1>Tasks</h1>
                </Link>

                <Link to='/appointments'
                    className={` flex gap-4  py-3 px-6  rounded-xl w-full items-center justify-start duration-500 ${path === 'appointments' ? 'bg-accent text-white ' : ' hover:text-accent '}`}
                    onClick={() => setPath('appointments')}
                >
                    <AiOutlineSchedule />
                    <h1>Appointment</h1>
                </Link>
            </ul>
            <button className='flex gap-4 w-full max-h-12 py-3 px-6  rounded-xl  items-center justify-center text-white font-semibold bg-black'>
                LOGOUT
            </button>
        </div>
    )
}

export default Sidebar