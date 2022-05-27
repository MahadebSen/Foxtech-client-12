import React from "react";
import bg from "../../../images/bg.jpg";

const ContactUs = () => {
  return (
    <div>
      <p className="text-4xl mt-[150px] mb-20">Contact Us</p>
      <div
        style={{
          background: `url(${bg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: ``,
          backgroundPosition: `center`,
          height: `300px`,
        }}
        className="flex items-center justify-center xl:rounded-xl"
      >
        <div className="px-5">
          <p className="text-2xl mb-8 text-white">
            Please place your <span className="text-yellow-500">Email</span>{" "}
            address or, <span className="text-yellow-500">Sign up</span> on top
          </p>
          <div class="form-control ">
            <div class="input-group justify-center">
              <input
                type="text"
                placeholder="Email Address"
                class="input input-bordered w-[250px] md:w-[350px] text-lg"
              />
              <button class="btn btn-square px-10 bg-purple-500 hover:bg-purple-700">
                <p>Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
