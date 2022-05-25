import React from 'react';
import Devider from '../Shared/Devider/Devider';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div class="mx-20 my-8 text-center">
            <div>
                <h1 class="py-6 text-5xl md:text-8xl">My Portfolio</h1>
                <Devider/>
                <p class="pt-5 text-5xl md:text-8xl leading-relaxed">Nishat Tasnim</p>
                <p class="py-5 text-base md:text-lg leading-relaxed">nishattasnim24258@gmail.com</p>
            </div>
            <div>
            <p class="py-5 text-4xl md:text-6xl leading-relaxed">Educational Qualification</p>
            <Devider/>
            </div>
        </div>
    );
};

export default Portfolio;