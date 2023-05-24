import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category ===  "offered")
    const desserts = menu.filter(item => item.category ===  "dessert")
    const pizza = menu.filter(item => item.category ===  "pizza")
    const salads = menu.filter(item => item.category ===  "salad")
    const soups = menu.filter(item => item.category ===  "soup")
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* section cover */}
            <Cover 
            img={menuImg}
            title="Our Menu"
            description="WOULD YOU LIKE TO TO TRY A DISH?"
            />
            
            {/* Offered section */}
            <SectionTitle subHeading={"Don't Miss"} heading="Today's offer" />
            <MenuCategory
            items={offered}
            />
            {/* dessert section */}
            <MenuCategory
            items={desserts}
            title="Desserts"
            description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            img={dessertImg}
            
            />
            {/* pizza section */}
            <MenuCategory
            items={pizza}
            title="Pizza"
            description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            img={pizzaImg}
            
            />
            {/* Salad section */}
            <MenuCategory
            items={salads}
            title="Salads"
            description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            img={saladImg}
            
            />
            {/* soup section */}
            <MenuCategory
            items={soups}
            title="Soups"
            description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            img={soupImg}
            
            />
        </section>
    );
};

export default Menu;