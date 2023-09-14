import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        licenseNumber: '',
        jurisdiction: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userObject = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            licenseNumber: formData.licenseNumber,
            jurisdiction: formData.jurisdiction,
        };
        console.log(userObject); // You can do something with the userObject here
    };

    return (
        <div className="flex flex-col w-full h-screen  pt-[5%] items-center font-inter text-text-primary  text-sm">
            <section className=' flex flex-col justify-center gap-6 p-6 text-center'>
                {/* <h1 className=' text-xl font-semibold '>Ministry of Low and Justice</h1> */}
                <h1 className=' text-lg font-bold text-accent'>REGISTER</h1>
            </section>
            <form onSubmit={handleSubmit} className=" p-8   flex flex-col  gap-3 w-[40%]">
                <div className=' flex gap-4 w-full'>
                    <div className="flex gap-1 flex-col w-full">
                        <label htmlFor="firstName" className="block text-gray-600 font-semibold">
                            First name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="w-full p-2 border rounded-xl focus:outline-none"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=' flex gap-1 flex-col  w-full'>
                        <label htmlFor="lastName" className="block text-gray-600 font-semibold">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="w-full p-2 border rounded-xl focus:outline-none"
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                    </div>

                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="licenseNumber" className="block text-gray-600 font-semibold">
                        License Number
                    </label>
                    <input
                        type="text"
                        name="licenseNumber"
                        id="licenseNumber"
                        className="w-full p-2 border rounded-xl focus:outline-none"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="jurisdiction" className="block text-gray-600 font-semibold">
                        Jurisdiction
                    </label>
                    <input
                        type="text"
                        name="jurisdiction"
                        id="jurisdiction"
                        className="w-full p-2 border rounded-xl focus:outline-none"
                        value={formData.jurisdiction}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-accent  mt-2 w-full text-white font-semibold py-2 px-4 rounded-xl hover:bg-green-800 duration-300"
                >
                    Register
                </button>
                <div className="text-center">
                </div>
            </form>
            <Link to="/login" className=' text-center  text-accent font-semibold  hover:text-green-800 duration-300'>Click here to Login</Link>
        </div>
    );
};

export default Register;
