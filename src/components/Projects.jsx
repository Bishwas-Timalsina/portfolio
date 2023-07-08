import React, { useEffect, useState } from 'react';
import image1 from '../files/crud.png';
import image2 from '../files/dish.jpg';
import image3 from '../files/movies.jpg';
import image4 from '../files/weather.jpg';

import Loading from './Loading';

const Projects = () => {

    return (
        <>
            <div className='h-[110vh] flex flex-col justify-center items-center bg-nav'>
                <div className='max-w-7xl mx-auto py-4'>
                    <p className='mt-4 text-2xl text-center text-textPrimary font-[500]'>
                        My <span className='text-ctaHover'> Projects</span>
                    </p>
                    <img src={require('../files/crud.png').default} alt="" />

                    <div className='grid grid-cols-12 justify-between items-center gap-3 mt-8'>

                        <div className='col-span-4 rounded-lg '>
                            <img src={image1} alt='' className='h-[300px] brightness-75'/>
                            <p className='text-2xl '>CRUD App</p>
                        </div>

                        <div className='col-span-4 rounded-lg' >
                            <img src={image2} alt='' className='h-[300px] brightness-75'/>
                            <p className='text-2xl '>Recipe360</p>
                        </div>

                        <div className='col-span-4 rounded-lg'>
                            <img src={image3} alt=''className='h-[300px] brightness-75'/>
                            <p className='text-2xl '>Movie360</p>
                        </div>

                        <div className='col-span-4 rounded-lg' >
                            <img src={image4} alt=''className='h-[300px] brightness-75'/>
                            <p className='text-2xl '>Weather360</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Projects;
