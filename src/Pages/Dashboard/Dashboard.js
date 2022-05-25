import React from "react";

const Dashboard = () => {
  return (
    <div>
      <p>this is dashboard</p>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side text-left">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>My Order</li>
            <li>Add a Review</li>
            <li>My Profile</li>
            <li>Manage Users</li>
            <li>Manage All Products</li>
            <li>Manage All Orders</li>
            <li>Add a Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
