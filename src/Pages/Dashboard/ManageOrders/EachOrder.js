import React from "react";

const EachOrder = ({ order, index }) => {
  const { img, name, email, address, phoneNumber, orderQuantity, totalPrice } =
    order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-[66px]" src={img} alt="" />
      </td>
      <td>{name.length > 10 ? name.slice(0, 10) + "..." : name}</td>
      <td>{email}</td>
      <td>{address.length > 10 ? address.slice(0, 10) + "..." : address}</td>
      <td>{phoneNumber}</td>
      <td>{orderQuantity}</td>
      <td>${totalPrice}</td>
    </tr>
  );
};

export default EachOrder;
