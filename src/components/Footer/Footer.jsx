import React from 'react';
import { Link } from 'react-router-dom';
import RunningInfoBar from './RunningInfo';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="footer bg-serene-blue border-t-2 mb-0 border-t-black pt-4">
            <div className="container mx-auto px-2 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-1">
                    <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-4 md:mb-0">
                        <div className="flex justify-between md:justify-between items-center mb-1">
                            <Logo width="100px" />
                        </div>
                        <p className="text-sm text-gray-600 mb-4 mt-2 md:mt-0">
                            &copy; Developed & Design by  Chanchal Sen
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-2 md:mb-0 h-full justify-between">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Profile's</h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="https://www.linkedin.com/in/chanchal09/">Linkedin</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="https://github.com/ChanchalSen09">Github</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-2 md:mb-0">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Other Project</h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="https://to-do-chanchal.netlify.app/">To-Do-App</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="https://chanchalsen09.netlify.app/">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-2 md:mb-0">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Upcoming Project</h3>
                        <ul>

                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">SAAS-Platfrom</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Article Q$C</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <RunningInfoBar />
            </div>
        </footer>
    );
}

export default Footer;
