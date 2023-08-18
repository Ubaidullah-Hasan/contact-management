import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUsergroupAdd, AiTwotoneHome } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";


const LeftSideBar = ({ setSidebar }) => {

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };
    

    const handleSearch = (event) => {
        console.log(searchText)
        
        if (!searchText){
            console.log('nie')
            return;
        }

        
        if (event) {
            event.preventDefault();
            fetch(`http://localhost:4000/contacts/search?query=${searchText}`)
                .then(res => res.json())
                .then(data => {
                    navigate(`/contacts/search?query=${searchText}`, { state: { searchData: data } })
                })
        }

        
    };
    // console.log(contacts)

    const handleButtonClick = () => {
        handleSearch();
    };



    

    return (
        <div className=' bg-gray-800 h-full py-6 px-4 text-white'>

            {/* logo */}
            <div className='mb-8 '>
                <h2 className='text-2xl font-extrabold '><Link onClick={() => setSidebar(false)} to={"/"}>LOGO</Link></h2>
                <p className=''>List your connection.</p>
            </div>

            {/* menu */}
            <ul className="text-white space-y-2">
                <li><Link onClick={() => setSidebar(false)} to="/" className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><AiTwotoneHome /> Home</Link></li>
                <li><Link onClick={() => setSidebar(false)} to={"/addnew"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><AiOutlineUsergroupAdd /> Add new</Link></li>
                <li><Link onClick={() => setSidebar(false)} to={"action"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><GiSettingsKnobs /> Action</Link></li>
                <li><Link onClick={() => setSidebar(false)} to={"/contactList"} className='flex items-center gap-3 bg-base-100 hover:bg-base-100/80 duration-100 text-base-content py-2 px-4 rounded'><CiViewList /> Contact List</Link></li>
            </ul>

            {/* search field */}

            <form onSubmit={handleSearch}>
                <div className="flex items-center border rounded-full px-4 py-2 my-10 ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none flex-grow"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="ml-2">
                        <BsSearch onClick={handleButtonClick} />
                    </button>
                </div>
            </form>


        </div>
    );
};

export default LeftSideBar;