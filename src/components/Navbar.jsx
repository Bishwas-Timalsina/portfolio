import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true);
    const [navShow, setNavShow] = useState(false);
    const [resNav, setResNav] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (isClicked) {
            setNavShow(true);
        } else {
            setNavShow(false);
        }
    };

    useEffect(() => {
        const updateWindowDimensions = () => {
            if (window.innerWidth < 420) {
                setResNav(true);
            } else {
                setResNav(false);
            }
        };

        window.addEventListener('resize', updateWindowDimensions);

        // Initial window size calculation
        updateWindowDimensions();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    return (
        <>
            <div className="bg-nav fixed w-full z-100 navbar">
                <div className="max-w-7xl mx-auto py-6 grid md:grid-cols-12 grid-cols-4 justify-items-between md:items-center">
                    <div className="col-span-2 text-textPrimary md:ml-0 ml-8">
                        <p className="text-2xl font-[500]">
                            <span className="">Bish</span>
                            <span className="text-ctaSecondary">was</span>
                        </p>
                    </div>

                    {isClicked ? (
                        <RxHamburgerMenu
                            className="text-textPrimary absolute right-8 text-2xl  col-span-2 md:hidden"
                            onClick={handleClick}
                        />
                    ) : (
                        <AiOutlineClose
                            className="text-textPrimary text-2xl absolute right-8 col-span-2 md:hidden"
                            onClick={handleClick}
                        />
                    )}

                    {(navShow && !resNav) && (
                        <ul className="md:col-span-10 col-span-4 flex md:justify-end flex-col md:flex-row md:ml-0 ml-8 gap-x-12 md:items-center items-start md:gap-y-0 gap-y-4 text-xl cursor-pointer text-textPrimary md:mt-0 mt-4">
                            <Link to="home" smooth={true} duration={500}>
                                <li className="hover:text-ctaHover transition duration-300 text-ctaHover">
                                    Home
                                </li>
                            </Link>
                            <Link to="about" smooth={true} duration={500}>
                                <li className="hover:text-ctaHover transition duration-300">
                                    About
                                </li>
                            </Link>
                            <Link to="skills" smooth={true} duration={500}>
                                <li className="hover:text-ctaHover transition duration-300">
                                    Skills
                                </li>
                            </Link>
                            <Link to="projects" smooth={true} duration={500}>
                                <li className="hover:text-ctaHover transition duration-300">
                                    Projects
                                </li>
                            </Link>
                            <Link to="contacts" smooth={true} duration={500}>
                                <li className="hover:text-ctaHover transition duration-300">
                                    Contacts
                                </li>
                            </Link>
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
