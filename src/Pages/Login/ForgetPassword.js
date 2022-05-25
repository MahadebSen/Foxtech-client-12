import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ForgetPassword = () => {
  return (
    <section className="flex justify-center items-center my-[150px]">
      <div className="border-2 rounded-xl w-[365px] md:w-[450px]">
        <p className="font-semibold text-3xl my-12">Forget your password</p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-[-20px] z-40" icon={faEnvelope} />
            <input
              placeholder="Email"
              type="email"
              className="border-b-[1px] border-[#999] outline-0 w-[315px] md:w-[370px] px-[32px] py-2 text-lg"
            />
          </div>
          <div className="pt-3 my-10">
            <button class="btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
