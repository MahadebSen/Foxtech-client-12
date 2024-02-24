import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../../firebase.init";

const CancleModal = ({ cancle, setCancle, refetch }) => {
  const handleCancle = () => {
    fetch(`https://foxtech-server.onrender.com/delete/${cancle._id}`, {
      method: "DELETE",
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
        if (data.deletedCount > 0) {
          setCancle(null);
          refetch();
        }
      });
  };

  const handleNo = () => {
    setCancle(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex py-12 flex-col justify-center items-center gap-5">
          <p className="font-semibold text-2xl text-red-500">
            Do you want to cancel?
          </p>
          <div className="modal-action flex flex-row gap-5">
            <label
              onClick={handleCancle}
              htmlFor="my-modal-6"
              className="btn bg-red-400"
            >
              Yes
            </label>
            <label onClick={handleNo} htmlFor="my-modal-6" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancleModal;
