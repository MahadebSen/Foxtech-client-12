import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const manus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/myportfolio">My Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {manus}
            </ul>
          </div>
          <Link className="pl-4" to="/">
            <img className="w-[165px] rounded-xl" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{manus}</ul>
        </div>
        <div className="navbar-end lg:hidden">
          <label for="my-drawer-2" class="btn btn-primary drawer-button ">
            Open drawer
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
