import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../CustomHooks/useAdmin";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side text-left">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
            {!admin && (
              <li>
                <Link to="/dashboard">My Order</Link>
              </li>
            )}
            {!admin && (
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/manageusers">Manage Users</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/manageproducts">Manage All Products</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/manageorders">Manage All Orders</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/addproduct">Add a Product</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
