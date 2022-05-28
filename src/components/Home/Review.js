import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import user from '../../images/icons/user.png'

const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h2 className='text-center text-2xl font-bold text-primary uppercase py-6'>Customers Reviews</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div class="card w-full bg-base-100 shadow-xl mr-6 mb-8">
                            <div class="h-[250px] p-5">
                                <div className='flex justify-center'>
                                    <img className='w-[50px]' src={user} alt="" />
                                </div>
                                <h2 class="card-title">{review.name}</h2>
                                <p>{review.comment}</p>
                                <p className='flex items-center mt-2'>Rating: {[...Array(review.rating)].map(star => <FaStar className='text-yellow-300 h-[20px] w-[30px] ml-2'></FaStar>)} </p>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;