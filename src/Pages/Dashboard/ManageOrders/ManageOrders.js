import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import EachOrder from "./EachOrder";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  const [allOrders, setAllOrders] = useState([]);

  const url = `http://localhost:5000/allorders?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [url]);

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">
        All Orders ({allOrders.length})
      </p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone no.</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row  --> */}
            {allOrders.map((order, index) => (
              <EachOrder
                key={order._id}
                order={order}
                index={index}
              ></EachOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
