import React from 'react';
import notFound from '../../images/background/404-pages.jpg'
const NotFound = () => {
    return (
        <div className='h-screen'>
            <div className='text-center mt-10'>
                <h2 className='text-4xl font-bold'>This Page Not Found</h2>
                <h2 className='text-4xl font-bold'>Please Come Back</h2>
                <h2 className='text-4xl font-bold'>Home Page</h2>
            </div>
            <div>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;