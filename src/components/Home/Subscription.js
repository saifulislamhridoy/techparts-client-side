import React from 'react';
import subscrip from '../../images/background/newsletter-bg.webp'
const Subscription = () => {
    return (
        <div  className='h-[400px] flex items-center justify-center' style={{ background: `url(${subscrip})` }}>
            <div>
            <div className=' text-white text-center'>
                <h2 className='text-xl font-bold uppercase p-3'>SPECIAL <span className='text-primary'>OFFER</span> FOR SUBSCRIPTION</h2>
                <h2 className='text-3xl font-bold uppercase'>GET INSTANT DISCOUNT FOR</h2>
                <h2 className='text-3xl font-bold uppercase'>MEMBERSHIP</h2>
                <p className='pt-3'>Subscribe our newsletter and all latest news of our
                </p>
                <p> latest product, promotion and offers</p>
            </div>
            <div className='flex justify-center mt-5'>
            <div class="form-control">
                <label class="input-group">
                    
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                    <span className='bg-primary text-white'>Email</span>
                </label>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Subscription;