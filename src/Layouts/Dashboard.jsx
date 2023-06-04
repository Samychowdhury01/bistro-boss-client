import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBars,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const isAdmin = !true;
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <li>
            <div className="flex flex-col items-start text-black md:mb-10">
              <h1 className="styled-text md:text-2xl font-extrabold">
                BISTRO BOSS
              </h1>
              <h3
                className="styled-text md:text-lg"
                style={{ letterSpacing: "0.38em" }}
              >
                Restaurant
              </h3>
            </div>
          </li>
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservations"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <AiOutlineBars />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaBook /> Manage Bookings
                </NavLink>
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservations"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/mycart"
                  className={({ isActive }) =>
                    `styled-text ${isActive ? "text-white font-semibold" : ""}`
                  }
                >
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge badge-warning font-bold">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `styled-text ${isActive ? "text-white font-semibold" : ""}`
              }
            >
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `styled-text ${isActive ? "text-white font-semibold" : ""}`
              }
            >
              <FaBars />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className={({ isActive }) =>
                `styled-text ${isActive ? "text-white font-semibold" : ""}`
              }
            >
              <FaUtensils />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
