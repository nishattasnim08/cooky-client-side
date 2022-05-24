import React from 'react';
import Banner from '../Banner/Banner';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools/>
            <Summary/>
        </div>
    );
};

export default Home;