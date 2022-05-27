import React from "react";

const EachOrder = ({ order, index }) => {
  const { img, name, address, phoneNumber, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={img} alt="" />
      </td>
      <td>{name.length > 10 ? name.slice(0, 10) + "..." : name}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};

export default EachOrder;
