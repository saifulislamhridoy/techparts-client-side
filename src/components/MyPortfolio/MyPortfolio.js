import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center h-screen'>
            <div class="card w-[60%] bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">My Portfolio</h2>
                    <div className=' p-8'>
                        <p>Email Address: saifulislam1hridoy@gmail.com</p>
                        <p>Educational Background: HSC Passed</p>
                        <p>My Three project Link:</p>
                        <p>Project 1. <a href="https://car-house-4d8d1.web.app/">https://car-house-4d8d1.web.app/</a></p>
                        <p>Project 2. <a href="https://photoshot-b0bf3.web.app/">https://photoshot-b0bf3.web.app/</a></p>
                        <p>Project 3. <a href="https://shiny-cannoli-939be8.netlify.app/">https://shiny-cannoli-939be8.netlify.app/</a></p>
                    </div>
                    <div>
                        <p>Used Technology:</p>
                        <li>React js</li>
                        <li>React Dom</li>
                        <li>React Query</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                        <li>React Form Hook</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;