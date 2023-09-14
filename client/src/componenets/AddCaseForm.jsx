import React, { useState, useRef } from 'react'

function AddCaseForm({ setModalOpen }) {
    const [formData, setFormData] = useState({
        attorneyId: '',
        plaintiff: '',
        defendant: '',
        file: null,
    });

    const fileRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file: file,
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
                <label htmlFor="plaintiff" className="block mb-2   font-semibold">
                    Plaintiff
                </label>
                <input
                    type="text"
                    name="plaintiff"
                    value={formData.plaintiff}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-xl focus:outline-none "
                    required
                />
            </section>

            <section className='w-full '>
                <label htmlFor="defendant" className="block mb-2   font-semibold">
                    Defendant
                </label>
                <input
                    type="text"
                    name="defendant"
                    value={formData.defendant}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-xl focus:outline-none "
                    required
                />
            </section>
            <section className='w-full '>
                <label htmlFor="defendant" className="block mb-2   font-semibold">
                    Transcript
                </label>
                {/* <div className=' bg-accent bg-opacity-20 rounded-xl px-2 py-1 text-xs text-green-800'
                    onClick={fileRef.current.click()}
                > Choose file
                </div> */}
                <input
                    type="file"
                    accept=".pdf"
                    ref={fileRef}
                    onChange={handleFileChange}
                    required
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-100 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"

                />
            </section>

            <button type='submit' onSubmit={handleSubmit} className='mt-2 flex gap-4  py-2 px-4 w-full font-semibold  rounded-xl  items-center justify-center text-white font-semibol bg-accent'>Submit</button>

        </form>
    )
}

export default AddCaseForm