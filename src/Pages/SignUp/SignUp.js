import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import signup from "../../images/signUp.jpg";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import useToken from "../../CustomHooks/useToken";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [token] = useToken(user);

  const handleSignUp = async (data) => {
    const name = await data.name;
    const email = await data.email;
    const password = await data.password;
    const confirmPassword = await data.confirmPwd;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log(user);
    } else {
      toast.error("Password and Confirm Password must be same.");
    }
  };

  if (loading || updating || googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  if (token) {
    console.log(user);
    navigate("/");
  }

  let errorMsg;
  if (error) {
    errorMsg = <p className="text-red-500">{error.message}</p>;
  }

  return (
    <section className="flex items-center justify-center my-[120px] mx-[60px] text-left">
      <div className="flex-1 flex justify-center items-center border-2 rounded-xl shadow-xl">
        <div className="mx-16 my-12">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-1"
          >
            <p className="font-bold text-4xl pb-10">Sign Up</p>
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faUser} />
              <input
                placeholder="Your name"
                type="text"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
            </div>
            <label className="label">
              {errors?.name?.type === "required" && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faEnvelope} />
              <input
                placeholder="Email"
                type="email"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
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
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-[-20px] z-40" icon={faLock} />
              <input
                placeholder="Password"
                type="password"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 Characters",
                  },
                })}
              />
            </div>
            <label className="label">
              {errors?.password?.type === "required" && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-[-20px] z-40"
                icon={faUnlockKeyhole}
              />
              <input
                placeholder="Confirm password"
                name="confirmPwd"
                type="password"
                className="border-b-[1px] border-[#999] outline-0 w-[400px] px-[32px] py-2 text-lg"
                {...register("confirmPwd", {
                  required: {
                    value: true,
                    message: "Confirm Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 Characters",
                  },
                })}
              />
            </div>
            <label className="label">
              {errors?.confirmPwd?.type === "required" && (
                <span className="text-red-500">
                  {errors.confirmPwd.message}
                </span>
              )}
              {errors?.confirmPwd?.type === "minLength" && (
                <span className="text-red-500">
                  {errors.confirmPwd.message}
                </span>
              )}
            </label>
            <div className="text-sm">
              <p className="my-3">
                Alrade have an account?{" "}
                <Link className="text-red-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <div>{errorMsg}</div>
            <div className="pt-3">
              <button class="btn">Sign up</button>
            </div>
          </form>
          <div className="mt-5">
            <p>Or, you may choose,</p>
            <div className="flex flex-row gap-3 mt-4">
              <div className="hover:shadow-2xl rounded-xl">
                <img className="w-[75px]" src={google} alt="" />
              </div>
              <div className="hover:shadow-2xl rounded-xl">
                <img className="w-[75px]" src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="mx-auto my-auto" src={signup} alt="" />
      </div>
    </section>
  );
};

export default SignUp;
