import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero mt-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
              className="max-w-sm rounded-lg shadow-2xl mx-auto"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-bold">The Foxtech</h1>
            <p className="py-6">
              The Foxtech is the largest trade association of electrical
              equipment manufacturers in the United States. Founded in 1926, it
              advocates for the industry, and publishes standards for electrical
              products.
            </p>
            <button className="btn btn-primary">Know more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
