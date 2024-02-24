import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faThumbsUp,
  faTruckFast,
  faUsers,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const BusinessSummary = () => {
  return (
    <section className="mt-28 mb-10 max-w-7xl mx-auto">
      <p className=" text-4xl mb-20">Millions Of Business Trust On Us</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-10">
        <div className="border-2 rounded-lg py-8 shadow-xl border-purple-400">
          <FontAwesomeIcon className="text-6xl" icon={faEarthAmerica} />
          <p className="font-bold text-5xl mt-3">87</p>
          <p className="font-semibold text-2xl">Countries</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl border-purple-400">
          <FontAwesomeIcon className="text-6xl" icon={faCartShopping} />
          <p className="font-bold text-5xl mt-3">562+</p>
          <p className="font-semibold text-2xl">Product delivery</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl border-purple-400">
          <FontAwesomeIcon className="text-6xl" icon={faUsers} />
          <p className="font-bold text-5xl mt-3">368+</p>
          <p className="font-semibold text-2xl">Happy Clients</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl border-purple-400">
          <FontAwesomeIcon className="text-6xl" icon={faTruckFast} />
          <p className="font-bold text-5xl mt-3">24/7</p>
          <p className="font-semibold text-2xl">Fast delivery</p>
        </div>
        <div className="border-2 rounded-lg py-8 shadow-xl border-purple-400">
          <FontAwesomeIcon className="text-6xl" icon={faThumbsUp} />
          <p className="font-bold text-5xl mt-3">564+</p>
          <p className="font-semibold text-2xl">Feedbacks</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
