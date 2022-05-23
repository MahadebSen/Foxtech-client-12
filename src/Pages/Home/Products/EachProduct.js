import React from "react";

const EachProduct = ({ product }) => {
  const { img, name, description, minimun_Order_Quantity, available, price } =
    product;
  return (
    <div>
      <div class="card card-compact bg-base-100 shadow-xl border-2">
        <figure className="border-2 rounded-xl m-3">
          <img className="rounded-xl" src={img} alt="" />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">{name}</h2>
          <p>
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          <p className="font-semibold text-lg">
            Minimun Order Quantity:{" "}
            <span className="text-red-500">{minimun_Order_Quantity}</span>
          </p>
          <p className="font-semibold text-lg">
            Available: <span className="text-red-600">{available}</span>
          </p>
          <p className="font-semibold text-lg">
            Price: $<span className="text-red-600 text-xl">{price}</span>
          </p>
          <div class="card-actions justify-center my-2">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
