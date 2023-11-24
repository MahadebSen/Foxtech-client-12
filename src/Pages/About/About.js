import React from "react";
import logo from "../../images/logo.png";

const About = () => {
  return (
    <section className="my-32 mx-32">
      <div className="sm:w-[350px] md:w-[500px] lg:w-[550px] mx-auto">
        <img className="mx-auto rounded-2xl" src={logo} alt="" />
      </div>
      <p className="text-xl my-7 font-medium">
        it's a full-stack project. I have used "React.js", "Tailwind.css",
        "Daisy UI", "Firebase", "Express.js", "mongoDB", etc.
      </p>
      <div className="text-center my-12">
        <a
          href="https://github.com/MahadebSen/Foxtech-client-12"
          className="border mx-4 px-5 py-4 rounded-md bg-indigo-500 text-white hover:text-black hover:border-indigo-500 hover:bg-white text-lg"
        >
          Client Side Code
        </a>
        <a
          href="https://github.com/MahadebSen/Foxtech-server-12"
          className="border mx-4 px-5 py-4 text-lg rounded-md bg-indigo-500 text-white hover:text-black hover:border-indigo-500 hover:bg-white"
        >
          Server Side Code
        </a>
      </div>
    </section>
  );
};

export default About;
