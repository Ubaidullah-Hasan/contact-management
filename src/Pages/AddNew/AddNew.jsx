import React from 'react';
import { useForm } from 'react-hook-form';


const AddNew = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='bg-gray-600 flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <div className='flex mb-6 gap-8'> 
                    <div className='w-full'>
                        <label htmlFor="first-name" className="block font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            {...register("First name", { required: true, maxLength: 80 })}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="last-name" className="block font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            {...register("Last name", { required: true, maxLength: 100 })}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>


                <div className='mb-6 flex gap-8'>
                    <div className="w-full">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            id="email"
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="mobile-number" className="block font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile-number"
                            {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="file-upload" className="block font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        id="file-upload"
                        {...register("file")}
                        className="file-input file-input-bordered w-full mt-2" />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddNew;