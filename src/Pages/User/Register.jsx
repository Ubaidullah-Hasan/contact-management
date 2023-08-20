import React, { useContext, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from '../../AuthProvider.jsx/AuthProvider';
import PasswordValidationForm from './PasswordValidationForm';

const Register = () => {
    const { createUserByEmail } = useContext(AuthContext);

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div className='flex items-center justify-center lg:min-h-screen my-5 lg:my-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-100 text-balck w-full lg:w-1/2 p-10'>
                <div className="mb-4">
                    <label htmlFor="first-name" className="block font-bold mb-1">First Name</label>
                    <input
                        type="text"
                        {...register("firstName", { required: true, maxLength: 25 })}
                        className={`${errors.firstName && 'border-red-500'} w-full p-2 border rounded focus:outline-none focus:ring`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="last-name" className="block font-bold mb-1">Last Name</label>
                    <input
                        type="text"
                        {...register("lastName")}
                        className="w-full p-2 border rounded focus:outline-none focus:ring"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        })}
                        className={`${errors?.email && 'border-red-500'} w-full p-2 border rounded focus:outline-none focus:ring`}
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-2">Invalid email address.</p>
                    )}

                </div>


                <div className="mb-4">
                    <label htmlFor="password" className="block font-bold mb-1">Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        })}
                        render={({ field }) => (
                            <PasswordValidationForm errors={errors.password} passwordField={field} />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block font-bold mb-1">Upload Profile Picture</label>
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        {...register("file")}

                        className="w-full p-2 border rounded focus:outline-none focus:ring bg-white"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default Register;

// {
//     validate: (value) => {
//         const allowedExtensions = ["jpg", "jpeg", "png"];
//         const extension = value[0]?.name.split(".").pop();
//         return allowedExtensions.includes(extension);
//     },
//                         }