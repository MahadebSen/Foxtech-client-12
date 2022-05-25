import React from "react";
import { useNavigate } from "react-router-dom";

const EachProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    _id,
    img,
    name,
    description,
    minimun_Order_Quantity,
    available,
    price,
  } = product;

  const handleBuyNow = (id) => {
    navigate("/products/" + id);
  };

  return (
    <div>
      <div class="card card-compact bg-base-100 shadow-xl border-2">
        <figure className="border-2 rounded-xl m-3">
          <img className="rounded-xl" src={img} alt="" />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">
            {name.length > 30 ? name.slice(0, 30) + "..." : name}
          </h2>
          <p>
            {description.length > 120
              ? description.slice(0, 120) + "..."
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
          <div className="card-actions justify-center my-2">
            <button
              onClick={() => handleBuyNow(_id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProductCard;
