import React from 'react';
import About from './About';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;