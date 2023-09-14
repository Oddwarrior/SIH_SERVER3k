import React, { useState } from 'react'
import { Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';


const CaseCard = ({ caseData }) => {

    const [opened, { toggle }] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [file, setFile] = useState(null);

    const addFile = () => {
        setModalOpen(!modalOpen);
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', file);
        setModalOpen(false);
    };

    return (
        <section className='bg-white rounded-lg p-6  gap-2 justify-start grid grid-cols-2 '>
            <div>
                <h1 className=' text-xl font-bold text-accent'>{`${caseData.plantiff} vs  ${caseData.defender}`}</h1>
                <h1 className=' text-sm text-text-secondary'><span className=' font-bold'>Case ID: </span>{caseData.caseID}</h1>
                <section className=' mt-4'>
                    <div className=' flex gap-2'>
                        <button className=' border-2 border-ray-500 px-4 py-1 rounded-2xl font-semibold' onClick={toggle}>Files</button>
                        <button className=' border-2 border-ray-500 w-8 h-8 rounded-full font-bold flex items-center justify-center' onClick={addFile}>+</button>

                        <ModalForm modalOpen={modalOpen} setModalOpen={setModalOpen} title={"Add file"}>
                            <form onSubmit={handleSubmit} className=' flex flex-col gap-2 p-2'>
                                <label htmlFor="defendant" className="block mb-2   font-semibold">
                                    Transcript
                                </label>

                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    required
                                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-100 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                                />
                                <button type='submit' className='mt-2 flex gap-4  py-2 px-4 w-full font-semibold  rounded-xl  items-center justify-center text-white font-semibol bg-accent'>Submit</button>
                            </form>

                        </ModalForm>
                    </div>

                    <Collapse in={opened} className=" flex  flex-col p-2">
                        {caseData.files.map((file, index) => (<Text key={index}>{file}</Text>))}
                    </Collapse>
                </section>
            </div>
            <div className=' flex  gap-2 items-start' >
                <section className=' flex  gap-2  items-center '>
                    <h1 className=' font-bold al' >Status:</h1>
                    <h1 className=' px-2  bg-[#f2f3ae50] w-20 h-8 flex items-center justify-center  font-semibold text-yellow-400 text-sm rounded-2xl'>
                        {caseData.status ? 'Closed' : 'Pending'}
                    </h1>
                </section>
            </div>
        </section>

    )
}

export default CaseCard