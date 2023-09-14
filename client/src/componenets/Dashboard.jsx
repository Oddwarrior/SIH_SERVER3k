import React, { useState } from 'react'
import ModalForm from './ModalForm';
import AddCaseForm from './AddCaseForm';

function Dashboard() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className=' flex flex-col gap-4 '>

            <h1 className=' py-2 font-extrabold uppercase text-xl'>Dashboard</h1>

            <section section className='grid md:grid-cols-4 gap-4' >
                <section className='bg-white rounded-lg p-4 flex gap-2 justify-center items-center'>
                    <h1 className=' font-bold text-2xl'>0</h1>
                    <h1 className=' font-semibold text-gray-600'>Clients</h1>
                </section>
                <section className='bg-white rounded-lg p-4 flex gap-2 justify-center items-center'>
                    <h1 className=' font-bold text-2xl'>0</h1>
                    <h1 className=' font-semibold text-gray-600'>Cases</h1>
                </section>
                <section className='bg-white rounded-lg p-4 flex gap-2 justify-center items-center'>
                    <h1 className=' font-bold text-2xl'>0</h1>
                    <h1 className=' font-semibold text-gray-600'>Important cases</h1>
                </section>
                <section className='bg-white rounded-lg p-4 flex gap-2 justify-center items-center'>
                    <h1 className=' font-bold text-2xl'>0</h1>
                    <h1 className=' font-semibold text-gray-600'>Archived cases</h1>
                </section>
            </section >

            <section className=' flex flex-col gap-4 bg-white rounded-lg p-6'>
                <h1 className=' font-extrabold text-xl'>Case Board</h1>

                <section className=' text-sm mt-2'>
                    <h1 className=' font-semibold'>Manage your case</h1>
                    <h1 className=' text-text-secondary'>Maintain complete case details like case history, case transfer, next hearing</h1>
                </section>

                <button onClick={() => setModalOpen(true)} className='flex gap-4  py-2 px-4 w-28 font-semibold  rounded-xl  items-center justify-center text-white font-semibol bg-accent'>Add Case</button>
                <ModalForm modalOpen={modalOpen} setModalOpen={setModalOpen} title="Add case" >
                    <AddCaseForm setModalOpen={setModalOpen} />
                </ModalForm>
            </section>
            <section className=' flex flex-col gap-4 bg-white rounded-lg p-6'>
                <h1 className=' font-extrabold text-xl'>Case Board</h1>

                <section className=' text-sm mt-2'>
                    <h1 className=' font-semibold'>Manage your case</h1>
                    <h1 className=' text-text-secondary'>Maintain complete case details like case history, case transfer, next hearing</h1>
                </section>

                <button onClick={() => setModalOpen(true)} className='flex gap-4  py-2 px-4 w-28 font-semibold  rounded-xl  items-center justify-center text-white font-semibol bg-accent'>Add Case</button>
                <ModalForm modalOpen={modalOpen} setModalOpen={setModalOpen} title="Add case" >
                    <AddCaseForm setModalOpen={setModalOpen} />
                </ModalForm>
            </section>


        </div >

    )
}

export default Dashboard