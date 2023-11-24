import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updatedUser, setUpdatedUser] = useState({});

  const url = `https://foxtech-server-12-production.up.railway.app/myprofile?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setUpdatedUser(data));
  }, [url]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const profile = {
      name: await event.target.name.value,
      imgUrl: await event.target.imgUrl.value,
      email: await event.target.email.value,
      address: await event.target.address.value,
      education: await event.target.education.value,
      phoneNumber: await event.target.phNumber.value,
      linkedIn: await event.target.link.value,
    };
    // console.table(profile);

    const url2 = `https://foxtech-server-12-production.up.railway.app/user?email=${user.email}`;

    fetch(url2, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          console.table(profile);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        {/* <p>My Profile</p> */}
        <div className="container mx-auto flex px-5 pt-20 pb-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-md lg:w-80 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center mx-auto w-56 rounded-full"
              alt="hero"
              src={updatedUser.imgUrl ? updatedUser.imgUrl : user.photoURL}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
              {user?.displayName}
            </h1>
            <p className="text-lg mb-2">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-md mb-2">
              <span className="font-bold text-lg">Education: </span>
              {updatedUser.education ? updatedUser.education : "NA"}
            </p>
            <p className="text-md mb-2">
              <span className="font-bold text-lg">Address: </span>
              {updatedUser.address ? updatedUser.address : "NA"}
            </p>
            <p className="text-md mb-2">
              <span className="font-bold text-lg">Phone Number: </span>
              {updatedUser.phoneNumber ? updatedUser.phoneNumber : "NA"}
            </p>
            <p className="text-md mb-2">
              <span className="font-bold text-lg">Linkedin: </span>
              <a
                className="text-blue-700"
                href={updatedUser.linkedIn ? updatedUser.linkedIn : "NA"}
              >
                {updatedUser.linkedIn ? updatedUser.linkedIn : "NA"}
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="divider mx-12"></div>
      <section className="text-gray-600 body-font relative text-left">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Update your profile
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto mb-5">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Youe Name:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.displayName}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    disabled
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image URL:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    value={updatedUser.imgUrl}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    disabled
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address:
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={updatedUser.address}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Education Background:
                  </label>
                  <textarea
                    id="education"
                    name="education"
                    value={updatedUser.education}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone no.
                  </label>
                  <input
                    type="number"
                    id="phNumber"
                    name="phNumber"
                    value={updatedUser.phoneNumber}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  LinkedIn Link:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={updatedUser.linkedIn}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 mt-3 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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

export default MyProfile;
