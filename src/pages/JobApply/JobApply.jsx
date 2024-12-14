import { div } from "framer-motion/client";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Authcontex from "../../Contex/AuthContext";
import useAuth from "../../Hoock/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(user.email, "user name");
  const navigate = useNavigate()

  const handelApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const Jobaplicationdata = { 
      job_id:id,
      applicant_email : user.email, 
      linkedin, 
      github, 
      resume
     };
     fetch(`http://localhost:5000/jobappliction`,{
      method:'POST',
      headers:{
        "content-type" :"application/json"
      },
      body: JSON.stringify(Jobaplicationdata)
     })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/myapplications")
      }
    })
  };

  return (
    <div>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold"></h1>
      </div>
      <div className="card bg-base-100 w-full shadow-2xl">
        <form onSubmit={handelApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin</span>
            </label>
            <input
              name="linkedin"
              type="url"
              placeholder="Enter Your Linkedin URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub URL</span>
            </label>
            <input
              name="github"
              type="url"
              placeholder="GitHub ULR"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              name="resume"
              type="url"
              placeholder="Resume ULR"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
