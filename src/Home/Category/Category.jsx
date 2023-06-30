import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <section className='mt-28'>
            <SectionTitle
                subHeading="---From 11:00am to 10:00pm---"
                heading=" ORDER ONLINE "
            ></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-3/4 mt-12 mx-auto"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='uppercase text-white font-bold text-xl -mt-12 ml-28'>Salads</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='uppercase text-white font-bold text-xl -mt-12 ml-28'>Pizzas</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='uppercase text-white font-bold text-xl -mt-12 ml-28'> Soups </h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='uppercase text-white font-bold text-xl -mt-12 ml-28'>Deserts</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='uppercase text-white font-bold text-xl -mt-12 ml-28'>Salads</h3>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Category;