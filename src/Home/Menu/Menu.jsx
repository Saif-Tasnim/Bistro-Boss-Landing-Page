import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [btnState, setBtnState] = useState(true)

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const mid = showAll ? menu.slice(0, 16) : menu.slice(0, 6);

    const handleState = () => {
        setShowAll(!showAll);
        setBtnState(!btnState);
    }

    return (
        <section className='mt-28 w-3/4 mx-auto'>

            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-7'>
                {
                    mid.map(m =>

                        <div className="card card-compact w-full bg-base-100 shadow-xl flex-row items-center justify-evenly h-[160px]">

                            <figure><img src={m.image} alt="Shoes" className='mt-3 rounded-lg' /></figure>
                            <div className="card-body flex-row">
                                <div>
                                    <h2 className="card-title">{m.name} -------</h2>
                                    <p>{m.recipe}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <p className='text-[#BB8506]'>${m.price}</p>
                                </div>
                            </div>
                        </div>

                    )}

            </div>

            <div className='flex justify-center mt-8'>
                <button className='btn btn-accent bg-white border-0 border-b-4 border-black' onClick={handleState}>
                    {
                        btnState ? "View Full Menu" : "View Less Menu"
                    }


                </button>
            </div>
        </section>
    );
};

export default Menu;