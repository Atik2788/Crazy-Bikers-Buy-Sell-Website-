import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [data, setData] = useState("");
    const {login, googleLogIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState()

    const { register, handleSubmit } = useForm();



    const handleLogin = (data) =>{
        login(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user); 
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        })
    }


    // google log in
    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }


    return (
        <div className='lg:w-2/4 mx-auto lg:my-40 px-3 lg:px-0 md:px-6 my-10 text-center lg:flex justify-center'>
            <div className='shadow-xl lg:w-[500px]  lg:p-6 p-3 '>
                <p className='text-5xl mb-5'>Login</p>

                <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(handleLogin)}>

                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {required:true})} type="email" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {required:true})} type="password" placeholder="Password" className="input input-bordered w-full" />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>

                    <p className='text-red-600 text-left'>{loginError}</p>
                    <input className='btn bg-red-700 w-full mt-3 ' type="submit" />
                </form>
                
                <p className='mt-3 text-md font-semibold text-left mb-6'>New to Doctors Portal? <Link className='text-red-700' to='/signup'> Create an account.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className='w-full p-3 btn-outline hover:bg-red-700 rounded-lg border-2 border-slate-500'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;