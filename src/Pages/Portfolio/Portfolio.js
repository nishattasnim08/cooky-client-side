import React from 'react';
import Devider from '../Shared/Devider/Devider';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div class="mx-20 my-8 text-center">
            <div>
                <h1 class="py-6 text-5xl md:text-7xl">My Portfolio</h1>
                <Devider />
                <p class="pt-5 text-5xl md:text-7xl leading-relaxed">Nishat Tasnim</p>
                <p class="py-5 text-base md:text-lg leading-relaxed">nishattasnim24258@gmail.com</p>
            </div>
            <div>
                <div>
                    <p class="py-5 text-3xl md:text-5xl leading-relaxed">Educational Qualification</p>
                    <Devider />
                </div>
                <div>
                    <div class="overflow-x-auto my-10">
                        <table class="table w-full">

                            <thead>
                                <tr class="hover">
                                    <th>#</th>
                                    <th>Degree</th>
                                    <th>Division/Subject</th>
                                    <th>University/Board</th>
                                    <th>Result</th>
                                    <th>Passing Year</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="hover">
                                    <th>1</th>
                                    <td>Bachalor of Science</td>
                                    <td>Computer Science and Engineering</td>
                                    <td>Daffodil International University</td>
                                    <td>Not Published</td>
                                    <td>2022</td>
                                </tr>

                                <tr class="hover">
                                    <th>2</th>
                                    <td>Higher Secondary Certificate</td>
                                    <td>Science</td>
                                    <td>Dhaka</td>
                                    <td>4.58 out of 5.00</td>
                                    <td>2017</td>
                                </tr>

                                <tr class="hover">
                                    <th>3</th>
                                    <td>Secondary School Certificate</td>
                                    <td>Science</td>
                                    <td>Dhaka</td>
                                    <td>5.00 out of 5.00</td>
                                    <td>2015</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p class="py-5 text-3xl md:text-5xl leading-relaxed">Skills/Technologies</p>
                    <Devider />
                </div>
                <div class="w-1/4 my-6 mx-auto">
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>HTML</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="98" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>CSS</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="95" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>JavaScript</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="85" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>Bootstrap</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="98" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>ReactJS</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="80" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>NodeJS</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="70" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>Tailwind</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="75" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>DaisyUI</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="85" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>Photoshop</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="90" max="100"></progress></div>
                    </div>
                    <div class="flex">
                        <div class="pr-6 mr-10 w-16"><p>Illustrator</p></div>
                        <div class="items-center"><progress class="progress progress-info w-56" value="95" max="100"></progress></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;