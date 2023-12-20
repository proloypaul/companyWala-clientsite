import React from 'react';
import Navbar from '../Navbar/Navbar';
import Company from '@/app/(HomeLayout)/company/page';
import Products from '@/app/(HomeLayout)/products/page';
import Explore from '@/app/(HomeLayout)/explore/page';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Explore/>
            <Company/>
            <Products/>

        </div>
    );
};

export default HomePage;