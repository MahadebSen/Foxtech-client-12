import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../../firebase.init";

const CancleModal = ({ cancle, setCancle, refetch }) => {
  const handleCancle = () => {
    fetch(`https://vast-journey-52196.herokuapp.com/delete/${cancle._id}`, {
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
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <p class="font-bold text-lg text-red-500">Are you sure to cancle ?</p>
          <div class="modal-action">
            <label
              onClick={handleCancle}
              for="my-modal-6"
              class="btn bg-red-400"
            >
              Yes
            </label>
            <label onClick={handleNo} for="my-modal-6" class="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancleModal;
