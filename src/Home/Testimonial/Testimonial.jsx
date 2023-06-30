import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className='mt-28'>
            <SectionTitle
                heading="TESTIMONIALS"
                subHeading="---What Our Clients Say---"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8 w-3/4 mx-auto">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className='mx-24 my-16 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'> {review.details} </p>
                            <p className='text-orange-400 text-xl'> {review.name} </p>
                        </div>
                    </SwiperSlide>
                    )}

            </Swiper>

        </section>
    );
};

export default Testimonial;