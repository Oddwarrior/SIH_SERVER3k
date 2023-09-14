import React from 'react'
import { Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const addFile = () => {

}

const CaseCard = ({ caseData }) => {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <section className='bg-white rounded-lg p-6  gap-2 justify-start grid grid-cols-2 '>
            <div>
                <h1 className=' text-xl font-bold text-accent'>{`${caseData.plantiff} vs  ${caseData.defender}`}</h1>
                <h1 className=' text-sm text-text-secondary'><span className=' font-bold'>Case ID: </span>{caseData.caseID}</h1>
                <section className=' mt-4'>
                    <div className=' flex gap-2'>
                        <button className=' border-2 border-ray-500 px-4 py-1 rounded-2xl font-semibold' onClick={toggle}>Files</button>
                        <button className=' border-2 border-ray-500 w-8 h-8 rounded-full font-bold flex items-center justify-center' onClick={addFile}>+</button>
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