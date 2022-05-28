import React from 'react';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Car from './Car';
import Products from './Products';
import Review from './Review';
import Subscription from './Subscription';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Products></Products>
            <Car></Car>
            <BusinessSumary></BusinessSumary>
            <Review></Review>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;