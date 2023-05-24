import { useEffect, useState } from "react";
import CartButton from "../../../components/CartButton/CartButton";
import OutlineButton from "../../../components/OutlineButton/OutlineButton";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItem = menu.filter(item => item.category ===  "popular")
   
    return (
        <section className="mb-20">
            <SectionTitle subHeading={"Check it out"} heading="From our menu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center">
           <OutlineButton>View Full Menu</OutlineButton>
            </div>
        </section>
    );
};

export default PopularMenu;