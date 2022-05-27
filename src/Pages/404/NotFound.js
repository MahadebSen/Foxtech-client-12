import React from "react";
import notFound from "../../images/404.gif";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="my-[110px]">
        <p className="text-5xl mt-6">404 Not Found</p>
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
