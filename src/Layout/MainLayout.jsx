import React from 'react';
import LeftSideBar from '../Conponents/LeftSideBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='w-88'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-span-3 h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;