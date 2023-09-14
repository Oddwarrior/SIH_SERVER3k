import React, { useState, useRef } from 'react'

function JoinCaseForm({ setModalOpen }) {
    const [formData, setFormData] = useState({
        attorneyId: '',
        caseID: '',
    });

    const fileRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setModalOpen(false);
    };

    return (
        <form onSubmit={handleSubmit} className=' w-full p-2 flex flex-col gap-2'>
            <section className='w-full '>
                <label htmlFor="attorneyId" className="block mb-2   font-semibold">
                    Attorney Id
                </label>
                <input
                    type="text"
                    name="attorneyId"
                    value={formData.attorneyId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-xl focus:outline-none "
                    required
                />
            </section>

            <section className='w-full '>
                <label htmlFor="caseID" className="block mb-2   font-semibold">
                    Case ID
                </label>
                <input
                    type="text"
                    name="case"
                    value={formData.caseID}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-xl focus:outline-none "
                    required
                />
            </section>

            <button type='submit' onSubmit={handleSubmit} className='mt-2 flex gap-4  py-2 px-4 w-full font-semibold  rounded-xl  items-center justify-center text-white font-semibol bg-accent'>Submit</button>

        </form>
    )
}

export default JoinCaseForm