import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {  refetch , data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users')
            return response.json()
          },
      })
// handle change a user role as admin
const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
              method: "PATCH"
            })
              
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                  refetch()
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: `${user?.name} is an Admin Now!`,
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
            });
}


// handle delete a user
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
            fetch(`http://localhost:5000/users/${id}`, {
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
          <title>Bistro Boss | All Users</title>
        </Helmet>
  

        <div className="bg-white p-5 md:w-[900px] mx-auto my-12">
          
            <h1 className="styled-text text-2xl font-bold mb-12">
              total orders: {users?.length}
            </h1>
            
         
          <div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className="bg-yellow-600 text-white">#</th>
                    <th className="uppercase bg-yellow-600 text-white">Name</th>
                    <th className="uppercase bg-yellow-600 text-white">
                      Email
                    </th>
                    <th className="uppercase bg-yellow-600 text-white">Role</th>
                    <th className="uppercase bg-yellow-600 text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users?.map((user, index) => (
                    <tr key={user?._id}>
                      <th>{index + 1}</th>
                      <td>
                      {user?.name}
                      </td>
                      <td>{user?.email}</td>
                      <td className="text-end">{user?.role === 'admin' ? 'admin' : <button 
                      onClick={() => handleMakeAdmin(user)}
                      className='btn btn-ghost bg-yellow-600 text-white'><FaUserShield className="text-2xl"/></button> }</td>
                      <th>
                        <button onClick={() => handleDelete(user?._id)} className="btn btn-ghost bg-red-500 text-white">
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

export default AllUsers;