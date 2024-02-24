import { signOut } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const EachUser = ({ user, refetch, index }) => {
  const { name, email, role } = user;

  const makeAdmin = () => {
    const url = `https://foxtech-server.onrender.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        } else {
          toast.error("Faild to make admin");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name ? name : "NA"}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <span className="text-green-700">Site's admin</span>
        ) : (
          <button onClick={makeAdmin} className="btn bg-purple-500 btn-xs">
            Make admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default EachUser;
