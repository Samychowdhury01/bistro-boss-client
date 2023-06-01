import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();

  // handler for delete Item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch()
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <SectionTitle heading="WANNA ADD MORE?" subHeading="my Cart" isCart />
      <div className="bg-white p-5 md:w-[900px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="styled-text text-2xl font-bold">
            total orders: {cart?.length}
          </h1>
          <div className="styled-text text-2xl font-bold">
            <span>Total Price $</span>
            {cart?.reduce((sum, item) => sum + item.price, 0)}
          </div>
          <Link className="btn bg-yellow-600 border-none">pay</Link>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-yellow-600 text-white">#</th>
                  <th className="uppercase bg-yellow-600 text-white">Photo</th>
                  <th className="uppercase bg-yellow-600 text-white">
                    Item Name
                  </th>
                  <th className="uppercase bg-yellow-600 text-white">Price</th>
                  <th className="uppercase bg-yellow-600 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((item, index) => (
                  <tr key={item?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt="food-image" />
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td className="text-end">$ {item?.price}</td>
                    <th>
                      <button onClick={() => handleDelete(item?._id)} className="btn btn-ghost bg-red-500 text-white">
                        <FaTrashAlt className="text-2xl" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
