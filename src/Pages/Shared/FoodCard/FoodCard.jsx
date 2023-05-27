import React from "react";
import CartButton from "../../../components/CartButton/CartButton";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="bg-gray-100 shadow-xl relative">
      <figure className="">
        <img src={image} alt="food-image" className="w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <CartButton>ADD TO CART</CartButton>
        </div>
        <div className="w-[89px] h-[48px] bg-black text-white font-bold flex items-center justify-center absolute top-5 right-5">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
