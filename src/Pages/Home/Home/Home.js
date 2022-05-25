import React from 'react';
import Banner from '../Banner/Banner';
import BestS from '../BestS/BestS';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
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
            <BestS/>
            <Subscribe/>
        </div>
    );
};

export default Home;