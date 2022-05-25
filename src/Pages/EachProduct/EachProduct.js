import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const EachProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const url = `http://localhost:5000/products/${params.id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);

  const { img, name, description, minimun_Order_Quantity, available, price } =
    product;

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <p class="mb-6 leading-relaxed">{description}</p>
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
            <div class="flex justify-center">
              <input
                type="number"
                id="hero-field"
                name="hero-field"
                class="w-full mr-5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <button class="inline-flex text-white bg-purple-500 border-0 py-3 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EachProduct;
