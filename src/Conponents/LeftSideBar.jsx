import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUsergroupAdd, AiTwotoneHome } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";


const LeftSideBar = () => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        console.log('Search text:', searchText);
        // You can perform any action with the search text here, such as filtering data, making API requests, etc.
    };

    

    return (
        <div className='bg-gray-800 min-h-screen w-80 py-6 px-4 text-white'>

            {/* logo */}
            <div className='mb-8 '>
                <h2 className='text-2xl font-extrabold '>LOGO</h2>
                <p className=''>List your connection.</p>
            </div>

            {/* menu */}
            <ul className="text-white space-y-2">
                <li><Link className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><AiTwotoneHome className='' /> Home</Link></li>
                <li><Link to={"/addnew"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><AiOutlineUsergroupAdd /> Add new</Link></li>
                <li><Link to={"action"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><GiSettingsKnobs /> Action</Link></li>
                <li><Link to={"/contactList"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><CiViewList /> Contact List</Link></li>
            </ul>
            
            {/* search field */}
            
            <div className="flex items-center border rounded-full px-4 py-2 my-10 ">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none flex-grow"
                    value={searchText}
                    onChange={handleInputChange}
                />
                <button className="ml-2" onClick={handleSearch}>
                    <BsSearch/>
                </button>
            </div>
            

        </div>
    );
};

export default LeftSideBar;