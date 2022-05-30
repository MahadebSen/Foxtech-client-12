import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      {/* <p>this is My portfolio</p> */}
      <section className="my-20 mx-32">
        <p className="text-3xl mb-4">
          Hi, my name is{" "}
          <span className="font-semibold text-4xl">Mahadeb Sen</span>.
        </p>
        <p className="text-xl mb-4">
          <span className="text-2xl font-medium">Email: </span>
          mahadebsen237@gmail.com
        </p>
        <p className="text-xl mb-4">
          <span className="text-2xl font-medium">Contact number: </span>
          +917908020943
        </p>
        <p className="text-xl mb-4">
          {/* <span className="text-2xl font-medium">Educational Background: </span> */}
          Firstly, I'm from non-CSC background. I have completed my graduation
          in "Geography" from "Ramananda College" under "Bankura University".
          And currently, I'm studying "Web Development" in "Programming Hero"
          bootcamp.
        </p>
        <p className="text-xl mb-4">
          <span className="text-2xl font-medium">List of Skils: </span>
          <ul className="flex flex-col md:flex-row gap-4 justify-center items-center py-4">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Tailwind css</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </p>
        <p className="text-xl mb-4">
          <span className="text-2xl font-medium">My projects: </span>
          <ul className="flex flex-row gap-4 justify-center items-center py-8">
            <li>
              <button class="btn btn-outline">
                <a href="https://waer-wolf.firebaseapp.com/">Mr. Wholesy</a>
              </button>
            </li>
            <li>
              <button class="btn btn-outline btn-primary">
                <a href="https://foxtech-90c48.web.app/">Foxtech</a>
              </button>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default MyPortfolio;
