import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const nonUserNav = <>
        <li className='uppercase text-md font-bold text-black lg:text-white py-2 lg:py-0'>
            <Link to="/" > Home </Link> </li>

            <li className='uppercase text-md font-bold text-black lg:text-white py-2 lg:py-0'>
            <Link to="/" > Contact Us</Link> </li>

            <li className='uppercase text-md font-bold text-black lg:text-white py-2 lg:py-0'>
            <Link to="/" > Our Shops </Link> </li>

            <li className='uppercase text-md font-bold text-black lg:text-white py-2 lg:py-0'>
            <Link to="/" >See Menu</Link> </li>

            <li className='uppercase text-md font-bold text-black lg:text-white py-2 lg:py-0'>
            <Link to="/" > Order Online </Link> </li>
    </>

    const userNav = <>
        <li className='uppercase text-md font-bold text-white'> <Link>Home </Link></li>

        <li className='uppercase text-md font-bold text-white'>
            <Link to="/" > Contact Us</Link> </li>

        <li className='uppercase text-md font-bold text-white'>
            <Link to="/" > Dashboard </Link> </li>

        <li className='uppercase text-md font-bold text-white'>
            <Link to="/" > Our Menu </Link> </li>

        <li className='uppercase text-md font-bold text-white'>
            <Link to="/" > Your Carts </Link> </li>
    </>

    return (

        <nav className="navbar pb-3 fixed z-10 navbar-css">
            <div className="justify-start w-[25%] md:ml-24">

                {/* mobile UI */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            nonUserNav
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl uppercase text-white block">
                    <span className='font-extrabold'> Bistro Boss </span> <br />
                    <span className='text-base'> Restaurants</span> </a>
            </div>


            <div className='justify-end w-[75%] md:mr-24 md:mt-6 md:items-center'>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nonUserNav}
                    </ul>
                </div>
                <div className="ml-2">
                    <button className="btn btn-outline text-white"> Log In </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;