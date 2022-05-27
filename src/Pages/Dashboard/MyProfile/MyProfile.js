import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <p>my profile</p>
    </div>
  );
};

export default MyProfile;
