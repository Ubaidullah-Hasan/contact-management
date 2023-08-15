import React from 'react';
import LeftSideBar from '../Conponents/LeftSideBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <LeftSideBar></LeftSideBar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;