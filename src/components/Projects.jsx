import React, { useEffect, useState } from 'react';
import image1 from '../files/crud.png';
import image2 from '../files/dish.jpg';
import image3 from '../files/movies.jpg';
import image4 from '../files/weather.jpg';
import image5 from '../files/portfolio.jpg';
import image6 from '../files/netflix.png';

import { Link } from 'react-router-dom'
import Loading from './Loading';

const Projects = () => {

    return (
        <>
            <div className='flex flex-col justify-center items-center bg-nav pb-12' id='projects'>
                <div className='max-w-7xl mx-auto py-4'>
                    <p className='mt-4 text-2xl text-center text-textPrimary font-[500]'>
                        My <span className='text-ctaHover'> Projects</span>
                    </p>
                    <img src={require('../files/crud.png').default} alt="" />

                    <div className='grid grid-cols-12 justify-between items-center gap-x-12 gap-y-12 mt-8 z-10'>

                        <div className='col-span-4 rounded-lg '>
                            <img src={image1} alt='' className='h-[200px] brightness-75 z-1' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
                                <p className='text-xl text-textPrimary col-span-2 '>MERN CRUD App</p>
                                <p className='col-span-2 text-textPrimary'>Technology: MERN Stack & RESTApi</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/mern-crud-backend' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/mern-crud-backend' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>

                            </div>

                        </div>

                        <div className='col-span-4 rounded-lg' >
                            <img src={image2} alt='' className='h-[200px] brightness-75' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
                                <p className='text-xl text-textPrimary col-span-2 '>Recipe360</p>
                                <p className='col-span-2 text-textPrimary'>Technology: ReactJS, TailwindCSS & mealDB API</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/react-recipe360' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/react-recipe360' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>
                            </div>
                        </div>

                        <div className='col-span-4 rounded-lg'>
                            <img src={image3} alt='' className='h-[200px] brightness-75' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
                                <p className='text-xl text-textPrimary col-span-2 '>Movie360</p>
                                <p className='col-span-2 text-textPrimary'>Technology: HTML,CSS,JS &tmdb API</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/movie360' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/movie360' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>
                            </div>
                        </div>

                        <div className='col-span-4 rounded-lg' >
                            <img src={image4} alt='' className='h-[200px] brightness-75' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
                                <p className='text-xl text-textPrimary col-span-2 '>Weather360</p>
                                <p className='col-span-2 text-textPrimary'>Technology: ReactJS, TailwindCSS & openweatherAPI</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/weatherAPP' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://react-recipe-360.onrender.com/' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-4 rounded-lg' >
                            <img src={image5} alt='' className='h-[200px] brightness-75' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2' >
                                <p className='text-xl text-textPrimary col-span-2 '>Personal Portfolio</p>
                                <p className='col-span-2 text-textPrimary'>Technology: ReactJS, TailwindCSS</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/weatherAPP' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/weatherAPP' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-4 rounded-lg' >
                            <img src={image6} alt='' className='h-[200px] brightness-75' />
                            <div className='grid grid-cols-2 gap-x-2 gap-y-2' >
                                <p className='text-xl text-textPrimary col-span-2 '>Netflix Clone</p>
                                <p className='col-span-2 text-textPrimary'>Technology: HTML, CSS, and JS</p>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/netflix-clone' target='_blank'
                                >
                                    <button >GIthub</button>
                                </Link>
                                <Link className='text-ctaPrimary bg-textPrimary hover:bg-ctaHover px-2 py-1 rounded-md col-span-1 text-center'
                                    to='https://github.com/Bishwas-Timalsina/netflix-clone' target='_blank'
                                >
                                    <button>View Live</button>
                                </Link>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div >
        </>
    );
};

export default Projects;
