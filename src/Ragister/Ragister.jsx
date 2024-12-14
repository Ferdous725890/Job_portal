import Lottie from "lottie-react";
import NavBar from "../pages/Shared/NavBar";
import RegisterAnimationData from "../../src/assets/Lotti/Register.json";
import { useContext } from "react";
import Authcontex from "../Contex/AuthContext";
import SocialLogin from "../pages/SocialLogin";
import {  useLocation, useNavigate } from "react-router-dom";

const Ragister = () => {
  //auth context improt
  const { createUser } = useContext(Authcontex);
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location,"log in page ");
  const forms = location.state || '/'

  //ragister handel
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({
      email,
      password,
    });
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Register Succefully")
        navigate(forms)
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
              <Lottie animationData={RegisterAnimationData}></Lottie>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handelRegister} className="card-body">
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
                <button className="btn btn-primary">Ragister Now </button>
              </div>
            </form>


            <div className="mb-3 p-3">
             <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
