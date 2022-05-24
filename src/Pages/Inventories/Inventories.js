import React from "react";
import { useQuery } from "react-query";
import Footer from "../Footer/Footer";
import EachProduct from "../Home/Products/EachProduct";

const Inventories = () => {
  const { data: products, isLoading } = useQuery("items", () =>
    fetch("fakeDB.json").then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="">
      <p className="my-12 text-4xl">Inventories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-10">
        {products.map((product) => (
          <EachProduct key={product._id} product={product}></EachProduct>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Inventories;
