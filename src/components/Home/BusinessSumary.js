import React from 'react';
import team from '../../images/icons/team.png'
import delivery from '../../images/icons/delivery-van.png'
import countries from '../../images/icons/location.png'
import review from '../../images/icons/customer-review.png'
const BusinessSumary = () => {
    return (
       <div>
           <h2 className='text-center text-2xl text-primary py-5 font-bold'>Business Summary</h2>
            <div className='flex justify-center'>
            <div class="stats shadow w-full h-[160px]">
                <div class="stat">
                <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-[70px] rounded-full">
                              <img src={countries} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">Connected Countries</div>
                    <div class="stat-value text-primary">105</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                <div class="stat-figure text-secondary">
                        <div class="avatar">
                            <div class="w-[70px] ">
                              <img src={review} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">Customer Reviews</div>
                    <div class="stat-value text-primary">10k</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-[70px]">
                              <img src={team} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">Our Customers</div>
                    <div class="stat-value text-primary">10.6M</div>
                    <div class="stat-desc">31% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar">
                            <div class="w-[70px] ">
                              <img src={delivery} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">Total Delivery</div>
                    <div class="stat-value text-primary">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default BusinessSumary;