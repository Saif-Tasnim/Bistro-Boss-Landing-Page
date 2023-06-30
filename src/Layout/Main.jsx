import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Home from '../Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;