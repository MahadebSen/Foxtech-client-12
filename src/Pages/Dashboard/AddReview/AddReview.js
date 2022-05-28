import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const review = {
      img: await event.target.imgUrl.value,
      name: await event.target.name.value,
      rating: await event.target.rating.value,
      feedback: await event.target.message.value,
    };

    const url = `http://localhost:5000/addreview?email=${user.email}`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Review
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Share your experiance with us.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} class="flex flex-wrap -m-2">
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Rating(Out of 5)
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-7 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReview;
