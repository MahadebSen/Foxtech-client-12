import React, { useEffect, useState } from "react";
import Product from "./Product";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://vast-journey-52196.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">
        All Products ({products.length})
      </p>
      <div class="overflow-x-auto">
        <table class="table w-full text-center">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Minimun Order Quantity</th>
              <th>Available</th>
              <th>Price</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          {/* <!-- body --> */}
          <tbody>
            {products.map((product, index) => (
              <Product
                key={product._id}
                product={product}
                index={index}
              ></Product>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
