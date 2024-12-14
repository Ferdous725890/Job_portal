import React, { useContext } from "react";
import NavBar from "../pages/Shared/NavBar";
import Lottie from "lottie-react";
import logIn from "../../src/assets/Lotti/login.json";
import Authcontex from "../Contex/AuthContext";
import { Result } from "postcss";
import Footer from "../pages/Shared/Footer";
import SocialLogin from "../pages/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUder } = useContext(Authcontex);
  const location = useLocation();
  const forms = location.state || "/";
  const naviage = useNavigate();
  const handelSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({
      email,
      password,
    });
    signInUder(email, password)
      .then((result) => {
        console.log(result.user);
        alert("success fully");
        naviage(forms);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" h-[700px] w-[700px] ">
            <div className="">
              <h1 className="text-3xl font-bold">Start for free Today</h1>
            </div>
            <p className="py-6">
              <Lottie animationData={logIn}></Lottie>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login Now </button>
              </div>
            </form>
            <div className="m-4 p-3">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
