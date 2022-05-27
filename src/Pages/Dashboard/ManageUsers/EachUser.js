import React from "react";

const EachUser = ({ user, index }) => {
  const { name, email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name ? name : "NA"}</td>
      <td>{email}</td>
      <td>
        <button class="btn bg-purple-500 btn-xs">Make admin</button>
      </td>
    </tr>
  );
};

export default EachUser;
