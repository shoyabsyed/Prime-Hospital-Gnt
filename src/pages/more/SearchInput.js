import React from 'react';
import { FiSearch } from 'react-icons/fi'; 

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <input
                type="text"
                className="p-3 w-72 border border-gray-300 focus:outline-none "
            />
            <button className="p-3 bg-blue-500 hover:bg-black-600 text-white ">
                <FiSearch size={25} />
            </button>
        </div>
    );
};

export default SearchBar;
