import React from 'react';

const Sidebar = () => {
    return (
        <div className="pt-10">
         
            <div className="mb-6">
                <h3 className="font-semibold text-xl mb-2">Recent Comments</h3>
                <ul>
                    <li className="mb-2 pt-6 text-lg">
                        <a href="#" className="text-gray-500 hover:text-blue-500 " >
                            A WordPress Commenter
                        </a>{' '}
                        on{' '}
                        <a href="#" className="text-gray-500 hover:text-blue-500">
                            Hello World!
                        </a>
                    </li>
                </ul>
            </div>

         
            <div className="mb-6">
                <h3 className="font-semibold text-xl   mb-2 pt-8">Archives</h3>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="hover:text-blue-500 text-lg text-gray-500">
                            July 2024
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 text-lg text-gray-500">
                            July 2021
                        </a>
                    </li>
                </ul>
            </div>

           
            <div>
                <h3 className="font-semibold text-xl mb-2 pt-8">Categories</h3>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="hover:text-teal-500 text-lg text-gray-500">Covid-19</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:text-teal-500 text-lg text-gray-500">Health</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-500 text-lg text-gray-500">Uncategorized</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
