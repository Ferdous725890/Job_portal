import { map } from "framer-motion/client";
import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { FaDollarSign, FaFire } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ jobcard }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    company_logo,
    company,
    description,
    requirements,
    salaryRange
    // salaryRange,
    // min,
    // max,
    // currency,
  } = jobcard;
  return (
    <div>
      <div className="card card-compact bg-base-100 h-[500px] shadow-xl">
        <div className="flex m-5  items-center">
          <figure>
            <img 
            className="w-16"
            src={company_logo} alt="Shoes" />
          </figure>

          <div className="ml-5">
            <h2 className="text-2xl font-bold">{company}</h2>
            <p className="text-xs flex items-center space-x-3">
            <FaLocationDot className="mr-2" />
                 {location} </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="badge bg-blue-500">new batch</div>
          <p>{description}</p>
          <div className="flex flex-wrap" >
            {
                requirements.map((skills,index) =><p className="border rounded-xl text-center px-3 mb-2 ml-1 hover:text-blue-500 hover:underline hover:bg-base-200" key={index}> {skills} </p>)
            }
          </div>

          <div className="">
           <p className="font-bold flex items-center"><FaDollarSign></FaDollarSign> Salary : {salaryRange.min}-{salaryRange.max} / {salaryRange.currency} </p>
          </div>
            <Link to={`/jobs/${_id}`}>
          <div className="card-actions justify-end p-5">
            <button className="btn w-full btn-primary">Apply Now</button>

          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
