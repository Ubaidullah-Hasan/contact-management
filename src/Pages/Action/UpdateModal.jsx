import React from 'react';
import { useForm } from 'react-hook-form';
import "./modal.css"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Swal from 'sweetalert2';


const UpdateModal = ({ setModal, modal, contact }) => {
    // console.log(modal, contact)
    const { _id, name, email, category, phone } = contact;
    const faLaName = name.split(/\s+/).filter(word => word !== '');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const updateInfo = {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            phone: data.number,
            category: data.category,
        }
        console.log(updateInfo)
        fetch(`http://localhost:4000/contacts/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount){
                    setModal(false);
                    Swal.fire(
                        'successful!',
                        'Contact Updated!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='overflow-hidden'>
            {
                modal &&
                <div className='absolute z-10 top-0 left-0 modal-bg w-full h-screen bg-black/80'>

                </div>
            }

            {
                modal
                &&
                <div className='transition-all duration-500'>
                    <div className='absolute cus-modal z-20'>
                        <form onSubmit={handleSubmit(onSubmit)} className="relative text-left w-full mx-auto p-6 bg-gray-100 text-black rounded-lg shadow-md">
                            <AiOutlineCloseCircle onClick={() => setModal(false)} size={30} className='text-black absolute right-7 top-6 cursor-pointer' />
                            <div className='flex mt-7 mb-6 gap-8'>
                                <div className='w-full'>
                                    <label htmlFor="first-name" className="block font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue={faLaName[0]}
                                        id="first-name"
                                        {...register("firstName", { required: true, maxLength: 80 })}
                                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 ${errors.firstName ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="last-name" className="block font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue={faLaName[1]}
                                        id="last-name"
                                        {...register("lastName", { maxLength: 100 })}
                                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500`}
                                    />
                                </div>
                            </div>

                            <div className='mb-6 flex gap-8'>
                                <div className="w-full">
                                    <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        defaultValue={email}
                                        id="email"
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="category-name" className="block font-medium text-gray-700">Category</label>
                                    <input
                                        type="text"
                                        defaultValue={category}
                                        id="category-name"
                                        {...register("category", { required: true, maxLength: 80 })}
                                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 ${errors.category ? 'border-red-500' : ''}`}
                                    />
                                </div>
                            </div>



                            <div className='flex gap-8'>
                                <div className="w-full">
                                    <label htmlFor="mobile-number" className="block font-medium text-gray-700">Mobile Number</label>
                                    <input
                                        type="tel"
                                        defaultValue={phone}
                                        id="mobile-number"
                                        {...register("number", { required: true, minLength: 6, maxLength: 12 })}
                                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 ${errors.number ? 'border-red-500' : ''}`}
                                    />
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="w-full py-2 px-4 mt-6 bg-green-600 hover:bg-green-700 text-white rounded-lg focus:outline-none "
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div >
    );
};

export default UpdateModal;

