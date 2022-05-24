import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import signup from "../../images/signUp.jpg";
import { Link } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";

const SignUp = () => {
  return (
    <section className="flex items-center justify-center my-[130px] mx-[60px] text-left">
      <div className="flex-1 flex justify-center items-center border-2 rounded-xl shadow-xl">
        <div className="m-16">
          <form className="flex flex-col gap-3">
            <p className="font-bold text-4xl pb-10">Sign Up</p>
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faUser} />
              <input
                placeholder="Your name"
                type="text"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
              />
            </div>
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
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-[-20px] z-40"
                icon={faUnlockKeyhole}
              />
              <input
                placeholder="Confirm password"
                type="password"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
              />
            </div>
            <div className="text-sm">
              <p className="my-3">
                Alrade have an account?{" "}
                <Link className="text-red-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <div className="pt-3">
              <button class="btn">Sign up</button>
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
        <img className="mx-auto my-auto" src={signup} alt="" />
      </div>
    </section>
  );
};

export default SignUp;
