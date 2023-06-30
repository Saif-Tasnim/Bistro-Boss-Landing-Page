import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Recommends = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const mid = menu.slice(40, 55)

    return (
        <section className='mt-28'>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="---Should Try---"
            ></SectionTitle>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
               
                {
                    mid.map(m =>
                        <SwiperSlide>

                            <div className=" w-[350px] h-[450px] bg-base-100 shadow-xl mr-7">
                                <figure className="px-10 pt-10">
                                    <img src={m.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{m.name}</h2>
                                    <p>{m.recipe}</p>
                                    <div className="card-actions hover:cursor-pointer">
                                        <button className="btn absolute bottom-0 left-1/3 text-[#D99904] border-0 border-b-2 border-[#BB8506] hover:bg-black ">  Add To Cart 
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                }


            </Swiper>
        </section>
    );
};

export default Recommends;