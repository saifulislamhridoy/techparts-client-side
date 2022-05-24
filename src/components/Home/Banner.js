import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../images/banner/slider-1.webp'
import banner2 from '../../images/banner/slider-2.webp'

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 9500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-screen w-full flex items-center" style={{ background: `url(${banner1})` }}>
                        <div className="ml-8 md:ml-12">
                            <h4 className="text-white text-xl font-serif md:text-3xl font-bold mb-4">NEW TECHNOLOGY & BUILD</h4>
                            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">WHEELS & TIRES</h1>
                            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">COLLECTIONS</h1>
                            <button className="btn bg-white text-black mb-4 hover:bg-red-600 hover:text-white uppercase">SHOP NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-screen w-full flex items-center" style={{ background: `url(${banner2})` }}>
                        <div className="ml-8 md:ml-12">
                            <h4 className="text-white text-xl md:text-5xl font-bold mb-4 uppercase">We are manufacturing</h4>
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 uppercase">product with world</h1>
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 uppercase">class quality</h1>
                            <button className="btn bg-white text-black mb-4 hover:bg-red-600 hover:text-white uppercase">SHOP NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;