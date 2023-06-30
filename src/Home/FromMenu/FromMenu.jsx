import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import './FromMenu.css';
import img from '../../assets/home/featured.jpg';

const FromMenu = () => {
    return (
        <section className='mt-28 w-3/4 mx-auto text-white banner-bg h-[840px]'>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
                className="pt-12"
            > </SectionTitle>

            <div className='flex justify-center gap-5 items-center py-20'>
                <div>
                    <img src={img} alt="" className='ml-6' />
                </div>

                <div className='ml-5'>
                    <h3 className='text-2xl'> March 20 , 2023 </h3>
                    <h2 className='uppercase text-2xl'> where can i get dome </h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate explicabo non quod est laborum sed dolores ipsum eaque maxime aliquam qui voluptates, voluptatibus accusantium ab corrupti blanditiis similique. Voluptatem.</p>

                    <button className='btn btn-outline mt-7 text-white font-bold border-0 border-b-2 border-white'> Read More </button>
                </div>

            </div>


        </section>
    );
};

export default FromMenu;