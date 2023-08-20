import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-red-500 w-full lg:w-1/2 p-10'>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        })}
                        className="w-full p-2 border rounded focus:outline-none focus:ring"
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-2">Invalid email address.</p>
                    )}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white font-bold mb-1">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                        className="w-full p-2 border rounded focus:outline-none focus:ring"
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

export default Login;