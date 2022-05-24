import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 px-12 py-10 text-center md:text-left md:flex justify-between">
      <div>
        <img
          className="w-[200px] rounded-xl mx-auto md:mx-0"
          src={logo}
          alt=""
        />
        <div className="text-white text-sm mt-3">
          <p>Foxtech Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>
        <div className="text-white mt-3">
          <p className=" text-gray-500">Get to know about us</p>
          <div className="my-2">
            <FontAwesomeIcon
              className="mr-1 text-xl hover:text-blue-500"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="mx-1 text-xl hover:text-cyan-500"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="mx-1 text-xl hover:text-red-600"
              icon={faYoutube}
            />
          </div>
        </div>
        <p className="text-white">&#169; 2008-2022 FOXTECH</p>
      </div>
      <div className="text-white md:grid md:grid-cols-3 gap-16">
        <div className="my-4 md:my-0 ">
          <h1 className="text-gray-500 my-1">ABOUT</h1>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Wholesale</p>
          <p>Corporate</p>
          <p>Information</p>
        </div>
        <div className="my-4 md:my-0 ">
          <h1 className="text-gray-500 my-1">HELP</h1>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>FAQ</p>
          <p>Report</p>
          <p>Infringemwnt</p>
        </div>
        <div className="my-4 md:my-0 ">
          <h1 className="text-gray-500 my-1">POLICY</h1>
          <p>Restock Policy</p>
          <p>Terms of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>EPR Compliance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
