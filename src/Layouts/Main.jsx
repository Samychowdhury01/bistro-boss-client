import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
           {!noHeaderFooter && <NavBar/>}
           <div className='min-h-[calc(100vh-91px)]'>
           <Outlet/>
           </div>
           {!noHeaderFooter && <Footer/> }
        </div>
    );
};

export default Main;