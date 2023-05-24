import React from 'react';
import { Helmet } from 'react-helmet-async';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuImg}
            title="Our Menu"
            description="WOULD YOU LIKE TO TO TRY A DISH?"
            />
            
        </div>
    );
};

export default Menu;