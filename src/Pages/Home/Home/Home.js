import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools/>
            <Summary/>
            <Reviews/>
        </div>
    );
};

export default Home;