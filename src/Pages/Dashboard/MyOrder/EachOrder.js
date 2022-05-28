import React from "react";

const EachOrder = ({ order, index }) => {
  const { img, name, address, phoneNumber, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-[65px]" src={img} alt="" />
      </td>
      <td>{name.length > 10 ? name.slice(0, 10) + "..." : name}</td>
      <td>{address.length > 10 ? address.slice(0, 10) + "..." : address}</td>
      <td>{phoneNumber}</td>
      <td>{orderQuantity}</td>
      <td>${totalPrice}</td>
      <td>
        <button class="btn bg-red-500 btn-xs">Cancle</button>
      </td>
      <td>
        <button class="btn bg-green-500 btn-xs">Pay</button>
      </td>
    </tr>
  );
};

export default EachOrder;
