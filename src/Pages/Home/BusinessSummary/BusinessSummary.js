import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faThumbsUp,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const BusinessSummary = () => {
  return (
    <section className="mb-10">
      <p className="font-semibold text-5xl mb-16">Business Trust On Us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10">
        <div className="border-2 rounded-lg py-8 shadow-xl">
          <FontAwesomeIcon className="text-6xl" icon={faEarthAmerica} />
          <p className="font-bold text-5xl mt-3">87</p>
          <p className="font-semibold text-2xl">Countries</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl">
          <FontAwesomeIcon className="text-6xl" icon={faTruckFast} />
          <p className="font-bold text-5xl mt-3">562+</p>
          <p className="font-semibold text-2xl">Product delivery</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl">
          <FontAwesomeIcon className="text-6xl" icon={faUsers} />
          <p className="font-bold text-5xl mt-3">368+</p>
          <p className="font-semibold text-2xl">Happy Clients</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl">
          <FontAwesomeIcon className="text-6xl" icon={faThumbsUp} />
          <p className="font-bold text-5xl mt-3">564+</p>
          <p className="font-semibold text-2xl">Feedbacks</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
