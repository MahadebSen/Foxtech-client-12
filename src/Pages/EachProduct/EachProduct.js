import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const EachProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const url = `https://foxtech-server.onrender.com/products/${params.id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);

  const { img, name, description, minimun_Order_Quantity, available, price } =
    product;

  const handlePurchase = async (event) => {
    event.preventDefault();
    if (
      parseInt(event.target.quantity.value) < parseInt(minimun_Order_Quantity)
    ) {
      return toast.error(
        `You have to order minimum ${minimun_Order_Quantity} units.`
      );
    } else if (parseInt(event.target.quantity.value) >= parseInt(available)) {
      return toast.error("Not available.");
    }

    const updatedAvailable =
      parseInt(await available) - parseInt(await event.target.quantity.value);

    const order = {
      img,
      name,
      description,
      minimun_Order_Quantity,
      available: updatedAvailable,
      price,
      userName: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      phoneNumber: event.target.phNumber.value,
      orderQuantity: event.target.quantity.value,
      totalPrice: parseInt(event.target.quantity.value) * parseInt(price),
    };

    fetch(`https://foxtech-server.onrender.com/products/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/dashboard");
        }
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <p className="mb-6 leading-relaxed">{description}</p>
            <p className="mb-2 font-semibold text-lg">
              Minimun Order Quantity:{" "}
              <span className="text-red-500">{minimun_Order_Quantity}</span>
            </p>
            <p className="mb-2 font-semibold text-lg">
              Available: <span className="text-red-600">{available}</span>
            </p>
            <p className="mb-9 font-semibold text-lg">
              Price: $<span className="text-red-600 text-xl">{price}</span>
            </p>
            <form onSubmit={handlePurchase} className="flex flex-col gap-2">
              <input
                type="text"
                id="hero-field"
                name="name"
                value={user.displayName}
                className="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                disabled
              ></input>
              <input
                type="email"
                id="hero-field"
                name="email"
                value={user.email}
                className="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                disabled
              ></input>
              <textarea
                type="text"
                id="hero-field"
                name="address"
                placeholder="Your address"
                className="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
              <input
                type="number"
                id="hero-field"
                name="phNumber"
                placeholder="Mobile number"
                className="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              ></input>
              <div className="flex justify-center">
                <input
                  type="number"
                  id="hero-field"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                ></input>
                <button className="inline-flex text-white bg-purple-500 border-0 py-3 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EachProduct;
