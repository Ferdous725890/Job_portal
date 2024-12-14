import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetailsLoded = useLoaderData();
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
    salaryRange,
  } = jobDetailsLoded;
  return (
    <div>
      <h2 className="text-2xl"> {title} </h2>
      <p> Location : {location} </p>
      <p> Job Type : {jobType} </p>
      <p> Job Category : {category} </p>
      <p> Applycation Dedline : {applicationDeadline} </p>
      <p> Company : {company} </p>
      <p> Description : {description} </p>
      <p> Requerment : {requirements} </p>
      <p> Salary Range Min : {salaryRange.min} </p>
      <p> Salary Range Max : {salaryRange.max} </p>
      <Link to={`/jobapply/${_id}`} >
        <button className="btn bg-blue-500 " >Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
