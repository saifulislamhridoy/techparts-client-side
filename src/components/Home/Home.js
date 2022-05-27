import React from 'react';
import Banner from './Banner';
import Car from './Car';
import Products from './Products';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Products></Products>
            <Car></Car>
        </div>
    );
};

export default Home;