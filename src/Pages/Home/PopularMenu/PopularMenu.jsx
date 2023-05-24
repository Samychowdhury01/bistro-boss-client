import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category ===  "popular")
            setMenu(popularItem)
        })
    }, [])
    return (
        <section className="mb-20">
            <SectionTitle subHeading={"Check it out"} heading="From our menu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;