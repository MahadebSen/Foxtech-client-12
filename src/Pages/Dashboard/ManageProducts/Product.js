import React from "react";

const Product = ({ product, index }) => {
  const { img, name, minimun_Order_Quantity, available, price } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-[66px]" src={img} alt="" />
      </td>
      <td>{name.length > 10 ? name.slice(0, 10) + "..." : name}</td>
      <td>{minimun_Order_Quantity}</td>
      <td>{available}</td>
      <td>${price}</td>
      <td>
        <button class="btn bg-red-500 btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default Product;
