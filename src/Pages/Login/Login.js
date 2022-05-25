import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import login from "../../images/logIn.jpg";
import { Link } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";

const Login = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center my-[130px] mx-[60px] text-left">
      <div className="flex justify-center items-center border-2 rounded-xl shadow-xl">
        <div className="m-16">
          <form className="flex flex-col gap-3">
            <p className="font-bold text-4xl pb-10">Login</p>
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faEnvelope} />
              <input
                placeholder="Email"
                type="email"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
              />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faLock} />
              <input
                placeholder="Password"
                type="password"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
              />
            </div>
            <div className="text-sm">
              <p className="my-2 text-red-500">
                <Link to="/forgetpassword">Forget Password</Link>
              </p>
              <p className="my-3">
                New here?{" "}
                <Link className="text-red-500" to="/signup">
                  Create a New Account
                </Link>
              </p>
            </div>
            <div className="pt-3">
              <button class="btn">Log in</button>
            </div>
          </form>
          <div className="mt-5">
            <p>Or, you may choose,</p>
            <div className="flex flex-row gap-3 mt-4">
              <div className="hover:shadow-2xl rounded-xl">
                <img className="w-[75px]" src={google} alt="" />
              </div>
              <div className="hover:shadow-2xl rounded-xl">
                <img className="w-[75px]" src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="mx-auto my-auto" src={login} alt="" />
      </div>
    </section>
  );
};

export default Login;
