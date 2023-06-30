import React from 'react';

const SectionTitle = ( {heading , subHeading} ) => {
    return (
        <div className='md:w-4/12 md:mx-auto text-center'>
            <h5 className='text-[#D99904] text-lg my-4 py-2'> {subHeading} </h5>
            <h2 className='text-3xl border-y-4 py-4'> {heading} </h2>
            <hr />
        </div>
    );
};

export default SectionTitle;