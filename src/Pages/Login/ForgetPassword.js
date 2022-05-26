import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const email = await data.email;

    await sendPasswordResetEmail(email);
    toast.success("Password reset email sent");
  };

  if (sending) {
    return <Loading></Loading>;
  }

  let errorMsg;
  if (error) {
    errorMsg = <p className="text-red-500">{error.message}</p>;
  }

  return (
    <section className="flex justify-center items-center my-[150px]">
      <div className="border-2 rounded-xl w-[365px] md:w-[450px]">
        <p className="font-semibold text-3xl my-12">Forget your password</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-[-20px] z-40" icon={faEnvelope} />
            <input
              placeholder="Email"
              type="email"
              className="border-b-[1px] border-[#999] outline-0 w-[315px] md:w-[370px] px-[32px] py-2 text-lg"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
          </div>
          <label className="label">
            {errors?.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
          <div>{errorMsg}</div>
          <div className="pt-3 my-10">
            <button class="btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
