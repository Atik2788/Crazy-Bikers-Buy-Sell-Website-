import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const [data, setData] = useState("");
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();
    // console.log(errors);


    const handleSignup = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully')
                // console.log(user)

                const userInfo = {
                    displayName: data.name,
                    email: data.email,
                    userCategory: data.userCategory,
                }
                updateUser(userInfo)
                    .then(() => {})
                    .catch(error => console.error(error))

            })
            .catch(err => {
                console.error(err);
                setSignUpError(err.message)
            })
    }


    return (
        <div className='lg:w-2/4 mx-auto lg:my-40 px-3 lg:px-0 md:px-6 my-10 text-center lg:flex justify-center'>
            <div className='shadow-xl lg:w-[500px]  lg:p-6 p-3 '>
                <p className='text-5xl mb-5'>Sing Up</p>
                
                <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(handleSignup)}>

                    <div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="name" placeholder="Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600 text-left' role="alert">{errors.name?.message}</p>}
                    </div>
                    {/* 
                    <div>
                        <label className="label"><span className="label-text">Image</span></label>
                        <input {...register("image", {required:true})} type="image" placeholder="Image" className="input input-bordered w-full" />
                    </div> */}

                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email address is required" })} type="email" placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"  {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters long' },
                        })} className='input input-bordered w-full ' />

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600 text-left' role="alert">{errors.password?.message}</p>}
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Select Purpose</span></label>
                        <select className=' input input-bordered w-full' {...register("userCategory", { required: true })}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    {signUpError && <p className='text-red-600 text-left'>{signUpError}</p>}

                    <input className='btn bg-red-700 w-full mt-3' type="submit" />

                </form>
                <p className='mt-4 text-md font-semibold text-left mb-6'>Already have an account? <Link className='text-red-700' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;