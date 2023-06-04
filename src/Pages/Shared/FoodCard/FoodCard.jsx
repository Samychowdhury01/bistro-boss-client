import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CartButton from "../../../components/CartButton/CartButton";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [, refetch] = useCart()
  const { name, recipe, image, price } = item;
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const { name,  image, price, _id } = item;
   
    if (user && user?.email) {
      const cartItem ={foodId: _id, name, image, price, email : user?.email }
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch() // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully added in you order List",
              showConfirmButton: false,
              timer: 1500,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            
          } 
        });
    }
    else {
      console.log('from else')
      Swal.fire({
        title: "Please login to order the food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="bg-gray-100 shadow-xl relative">
      <figure className="">
        <img src={image} alt="food-image" className="w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <p onClick={() => handleAddToCart(item)}>
            <CartButton>ADD TO CART</CartButton>
          </p>
        </div>
        <div className="w-[89px] h-[48px] bg-black text-white font-bold flex items-center justify-center absolute top-5 right-5">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
