import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Info from '../Info/Info';
import Menu from '../Menu/Menu';
import Call from '../Call/Call';
import Recommends from '../Recommends/Recommends';
import FromMenu from '../FromMenu/FromMenu';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Info></Info>
            <Menu></Menu>
            <Call></Call>
            <Recommends></Recommends>
            <FromMenu></FromMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;