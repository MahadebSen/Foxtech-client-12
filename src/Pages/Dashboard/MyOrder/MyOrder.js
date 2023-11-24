import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import CancleModal from "./CancleModal";
import EachOrder from "./EachOrder";

const MyOrder = () => {
  const [cancle, setCancle] = useState(null);
  const [user] = useAuthState(auth);

  const url = `https://foxtech-server-12-production.up.railway.app/order?email=${user.email}`;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("available", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">
        My Orders ({orders.length})
      </p>
      <div className="overflow-x-auto ">
        <table className="table w-full text-center">
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
              <th>Cancel</th>
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
                setCancle={setCancle}
              ></EachOrder>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        {cancle && (
          <CancleModal
            cancle={cancle}
            setCancle={setCancle}
            refetch={refetch}
          ></CancleModal>
        )}
      </section>
    </div>
  );
};

export default MyOrder;
