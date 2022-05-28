import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import EachOrder from "./EachOrder";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  const url = `https://vast-journey-52196.herokuapp.com/order?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">
        My Orders ({orders.length})
      </p>
      <div class="overflow-x-auto ">
        <table class="table w-full text-center">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Cancle</th>
              <th>Pay</th>
            </tr>
          </thead>
          {/* <!-- body --> */}
          <tbody>
            {orders.map((order, index) => (
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

export default MyOrder;
