import React from 'react';

const Banner = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-2/6 mx-auto lg:text-left text-center  lg:my-0 my-10 flex  items-center justify-center">
                <div>
                    <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-red-700">CRAZY BIKERS</h2>
                    <p className='mt-1 text-xl text-black'>Exchange, Buy an Sell</p>
                    <div className="">
                        <button className="btn border-none w-full btn-sm rounded-none bg-red-700 mt-5">Details</button>
                    </div>
                </div>
            </div>
            <figure className='lg:w-4/6'><img src="https://i.ibb.co/ccnskv4/3873120.webp" alt="Album" /></figure>
        </div>
    );
};

export default Banner;