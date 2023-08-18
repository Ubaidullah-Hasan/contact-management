// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";


// const PhoneNumberValidation = () => {
//     const { register, handleSubmit, reset, formState: { errors }, control } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     const handleValidate = (value) => {
//         const isValid = isValidPhoneNumber(value);
//         console.log({ isValid });
//         return isValid;
//     };

//     return (
//         <div className='bg-gray-600 flex items-center justify-center h-screen'>
//             <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//                 <div className='mb-6 flex gap-8'>
//                     <div className="w-full">
//                         <label htmlFor="mobile-number" className="block font-medium text-gray-700">Mobile Number</label>
//                         <Controller
//                             name="mobile"
//                             control={control}
//                             rules={{
//                                 validate: (value) => handleValidate(value)
//                             }}
//                             render={({ field: { onChange, value } }) => (
//                                 <PhoneInput
//                                     className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 ${errors.mobile ? 'border-red-500' : ''}`}
//                                     value={value}
//                                     onChange={onChange}
//                                     defaultCountry="US"
//                                     id="mobile-number"
//                                 />
//                             )}
//                         />
//                         {errors.mobile && (
//                             <p className="error-message bg-red-500">Invalid Phone</p>
//                         )}
//                     </div>
//                 </div>
//                 <button
//                     type="submit"
//                     className="font-bold uppercase w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//                 >
//                     Add Contact
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default PhoneNumberValidation;

