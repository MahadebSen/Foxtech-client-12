import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import EachUser from "./EachUser";

const ManageUsers = () => {
  const [user] = useAuthState(auth);

  const url = `https://foxtech-server-12-production.up.railway.app/users?email=${user.email}`;

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <p className=" font-semibold text-2xl mb-8">All Users ({users.length})</p>
      <div className="overflow-x-auto">
        <table className="table w-full ">
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
              <EachUser
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
              ></EachUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
