import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import login from "../../images/logIn.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import useToken from "../../CustomHooks/useToken";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [token] = useToken(user || googleUser || githubUser);

  const handleLogin = async (data) => {
    const email = await data.email;
    const password = await data.password;
    await signInWithEmailAndPassword(email, password);
  };

  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleGithub = () => {
    signInWithGithub();
  };

  if (loading || googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  let errorMsg;
  if (error) {
    errorMsg = <p className="text-red-500">{error.message}</p>;
  } else if (googleError) {
    errorMsg = <p className="text-red-500">{googleError.message}</p>;
  } else if (githubError) {
    errorMsg = <p className="text-red-500">{githubError.message}</p>;
  }

  return (
    <section className="flex flex-row-reverse items-center justify-center my-[130px] mx-[60px] text-left">
      <div className="flex justify-center items-center border-2 rounded-xl shadow-xl">
        <div className="m-16">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-1"
          >
            <p className="font-bold text-4xl pb-10">Login</p>
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
            <div className="text-sm">
              <p className="my-2 text-red-500">
                <Link to="/forgetpassword">Forget Password</Link>
              </p>
              <p className="my-3">
                New here?{" "}
                <Link className="text-red-500" to="/signup">
                  Create a New Account
                </Link>
              </p>
            </div>
            <div>{errorMsg}</div>
            <div className="pt-3">
              <button className="btn">Log in</button>
            </div>
          </form>
          <div className="mt-5">
            <p>Or, you may choose,</p>
            <div className="flex flex-row gap-3 mt-4">
              <div className="hover:shadow-2xl rounded-xl">
                <img
                  onClick={handleGoogle}
                  className="w-[75px]"
                  src={google}
                  alt=""
                />
              </div>
              <div
                onClick={handleGithub}
                className="hover:shadow-2xl rounded-xl"
              >
                <img className="w-[75px]" src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img className="mx-auto my-auto" src={login} alt="" />
      </div>
    </section>
  );
};

export default Login;
