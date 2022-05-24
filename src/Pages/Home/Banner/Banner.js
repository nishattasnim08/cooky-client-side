import React from 'react';
import Devider from '../../Shared/Devider/Devider';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full my-1.5">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NVPHJMz/banner-1.png" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/4sCy3NF/banner-2.png" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Syyzb2j/banner-3.png" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/1rP7c6X/banner-4.png" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div class="mx-20 my-10 text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Cooking is our passion</h1>
                <Devider/>
                <p class="py-5 text-2xl md:text-4xl leading-relaxed">We know that your home is important to you, just like providing a beautiful product at a value price is important to us.</p>
            </div>
        </div>
    );
};

export default Banner;