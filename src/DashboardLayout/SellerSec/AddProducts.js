import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AddProducts = () => {

    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(new Date())

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddProduct = (data) => {
        // console.log(data);

        const bikeInfo = {
            sellersName: data.sellersName,
            email: data.email,
            mobileNumber: data.mobileNumber,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,
            email: data.email,

        } 
        console.log(bikeInfo)
    }








    return (
        <div className=' lg:my-20 my-10 px-3 lg:px-0 md:px-6 '>
            <div className='lg:w-11/12 mx-auto lg:p-6 p-3 '>
                <p className='text-5xl mb-5 text-red-700 font-bold text-center'>Add Your Product</p>

                <form className='' onSubmit={handleSubmit(handleAddProduct)}>


                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className=''>

                            <div>
                                <label className="label"><span className="label-text">Seller's Name</span></label>
                                <input {...register("sellersName")}
                                    disabled defaultValue={user.displayName}
                                    type="text" placeholder="Seller Name" className="input input-bordered w-full" />

                            </div>

                            <div>
                                <label className="label"><span className="label-text">Email</span></label>
                                <input {...register("email")} disabled defaultValue={user.email} type="email" placeholder="Email" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Seller's Mobile Number</span></label>
                                <input {...register("mobileNumber", { required: "Mobile Number is required" })} type="text" placeholder="Mobile Number" className="input input-bordered w-full" />
                                {errors.mobileNumber && <p className='text-red-600 text-left' role="alert">{errors.mobileNumber?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Post's Date</span></label>
                                <input {...register("postDate")} disabled defaultValue={format(selectedDate, 'PP')} type="text" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Bike Name</span></label>
                                <input {...register("name", { required: "Bike Name is required" })} type="text" placeholder="Bike Name" className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-600 text-left' role="alert">{errors.name?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Bike Image URL</span></label>
                                <input {...register("img", { required: "Bike Name is required" })} type="text" placeholder="Bike Img URL" className="input input-bordered w-full" />
                                {errors.img && <p className='text-red-600 text-left' role="alert">{errors.img?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Location</span></label>
                                <input type="text"  {...register("location", { required: "Location is required" })}
                                    className='input input-bordered w-full ' placeholder='Location' />
                                {errors.location && <p className='text-red-600 text-left' role="alert">{errors.location?.message}</p>}
                            </div>

                        </div>




                        <div>

                            <div>
                                <label className="label"><span className="label-text">Select Category</span></label>
                                <select className=' input input-bordered w-full' {...register("category", { required: true })}>
                                    <option value="Cruiser">Cruiser</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Off-Road">Off-Road</option>
                                </select>
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Engine CC</span></label>
                                <input type="text"  {...register("cc", { required: "Engine CC is required" })}
                                    className='input input-bordered w-full ' placeholder='Engine CC' />
                                {errors.cc && <p className='text-red-600 text-left' role="alert">{errors.cc?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Year of buy</span></label>
                                <input type="text"  {...register("buyYear", { required: "Year of buy is required" })}
                                    className='input input-bordered w-full ' placeholder='Year of buy' />
                                {errors.buyYear && <p className='text-red-600 text-left' role="alert">{errors.buyYear?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Years Of Use</span></label>
                                <input type="text"  {...register("yearsOfUse", { required: "Years Of Use is required" })}
                                    className='input input-bordered w-full ' placeholder='Years Of Use' />
                                {errors.yearsOfUse && <p className='text-red-600 text-left' role="alert">{errors.yearsOfUse?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Original Price</span></label>
                                <input type="text"  {...register("originalPrice", { required: "Original Price is required" })}
                                    className='input input-bordered w-full ' placeholder='Original Price' />
                                {errors.originalPrice && <p className='text-red-600 text-left' role="alert">{errors.originalPrice?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Resale Price</span></label>
                                <input type="text"  {...register("resalePrice", { required: "Resale Price is required" })}
                                    className='input input-bordered w-full ' placeholder='Resale Price' />
                                {errors.resalePrice && <p className='text-red-600 text-left' role="alert">{errors.resalePrice?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Condition</span></label>
                                <input type="text"  {...register("conditionType", { required: "Condition is required" })}
                                    className='input input-bordered w-full ' placeholder='Condition' />
                                {errors.conditionType && <p className='text-red-600 text-left' role="alert">{errors.conditionType?.message}</p>}
                            </div>

                        </div>
                    </div>


                    <input className='btn bg-red-700 lg:w-1/4 w-full mx-auto mt-10' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;