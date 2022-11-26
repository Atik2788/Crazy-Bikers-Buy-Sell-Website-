import React from 'react';

const About = () => {
    return (
        <div className='mt-36 mb-20'>
            <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/jh98ZVw/f43908e33747f32007916df9fe96c508.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" my-20">
                        <h1 className="mb-5 text-5xl font-bold">Our Goal</h1>
                        <p className="mb-2 text-2xl font-bold">Bringing buyers and sellers together to fulfill their needs</p>
                        <p className="mb-5 text-2xl font-bold">Exchange your craze to get new craze. It is best way to meet new craze in every moment!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div>
                <div className="hero p-10 mt-20 shadow-lg bg-red-100 lg:flex">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact With Us</h1>

                            <div className='grid grid-cols-3 gap-5 text-center'>
                                <p className="py-6 text-blue-700 font-bold text-md"><a href="https://www.linkedin.com/in/md-atikur-rahman-shanta-88a182241/"> Linkedin</a></p>
                                <p className="py-6 text-blue-700 font-bold text-md"><a href="https://www.facebook.com/atik.ahmed.75054/"> Facebook</a></p>
                                <p className="py-6 text-blue-700 font-bold text-md"><a href="https://github.com/Atik2788"> GitHub</a></p>
                            </div>

                        </div>

                        <div className="flex-shrink-0  lg:mr-16 lg:w-[600px] shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Mobile Number</span>
                                    </label>
                                    <input type="text" placeholder="Mobile Number" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-red-700">Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default About;