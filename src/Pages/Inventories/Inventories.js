import React from "react";
import { useQuery } from "react-query";
import Footer from "../Footer/Footer";
import EachProductCard from "../Home/Products/EachProductCard";

const Inventories = () => {
  const { data: products, isLoading } = useQuery("items", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="">
      <p className="my-12 text-4xl">Inventories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-10">
        {products.map((product) => (
          <EachProductCard
            key={product._id}
            product={product}
          ></EachProductCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Inventories;
