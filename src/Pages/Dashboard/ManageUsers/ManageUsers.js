import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import EachUser from "./EachUser";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);

  const url = `http://localhost:5000/users?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
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
      .then((data) => setUsers(data));
  }, [url]);

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">All Users ({users.length})</p>
      <div class="overflow-x-auto">
        <table class="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          {/* <!-- body --> */}
          <tbody>
            {users.map((user, index) => (
              <EachUser key={user._id} user={user} index={index}></EachUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
