import { Link } from "react-router-dom";
import OutlineButton from "../../../components/OutlineButton/OutlineButton";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, description, img }) => {
  return (
    <div>
      {title && <Cover title={title} description={description} img={img} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mt-24">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mb-11">
        {title && (
          <Link to={`/order/${title}`}>
            <OutlineButton>ORDER YOUR FAVOURITE FOOD</OutlineButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
