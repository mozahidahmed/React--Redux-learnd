import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import GetData from './GetData/GetData';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>

        </div>
    );
};

export default Home;