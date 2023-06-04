import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () =>{
const {user} = useAuth();
const token = localStorage.getItem('access-token')
const [axiosSecure] = useAxiosSecure()

const { isLoading, refetch ,data: cart} = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
        const response = await axiosSecure(`/carts?email=${user?.email}`)
        
        return response
      },
    // queryFn: async () => {
    //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
    //       headers: {
    //         authorization: `bearer ${token}`
    //       }
    //     })
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok')
    //     }
    //     return response.json()
    //   },
  })

   return [cart, refetch]
}

export default useCart