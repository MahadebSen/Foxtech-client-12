import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "./useAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <loading></loading>;
  }

  if (!user || !admin) {
    return <Navigate to="/*" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAdmin;
