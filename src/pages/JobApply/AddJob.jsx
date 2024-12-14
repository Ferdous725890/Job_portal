import { object } from "framer-motion/client";
import Swal from "sweetalert2";
import useAuth from "../../Hoock/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
const handelJobadd = (event) =>{
  event.preventDefault()
  const formData = new FormData(event.target)
  // console.log(formData.entries());
  const initialData = Object.fromEntries(formData.entries())
 console.log(initialData);
 const {min, max, currency, ...newjob} = initialData

 console.log(newjob);

 newjob.salaryRang = {min, max, currency}
 newjob.requirement = newjob.requirement.split("\n")
 newjob.responsibility = newjob.responsibility.split("\n")
 console.log(newjob);

 fetch(`http://localhost:5000/jobs`,{
  method:'POST',
  headers:{
    "content-type" :"application/json"
  },
  body:JSON.stringify(newjob)
 })
 .then(res=>res.json())
 .then(data=>{
  console.log(data);
  if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been added",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/mypostedJob")
        }
 })

}



  return (
    <div>
      <h2>Post a new job</h2>

      <form onSubmit={handelJobadd} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Job_Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Job_location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Job_location"
            className="input input-bordered"
            required
          />
        </div>

        {/* category*/}

        <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <input
            name="category"
            type="text"
            placeholder="Job_category"
            className="input input-bordered"
            required
          />
        </div>

        {/* jobType */}

        <select defaultValue={"Job_Type"} className="select select-bordered w-full max-w-xs">
          <option disabled >
            Job_Type
          </option>
          <option>Full Time</option>
          <option>Intern</option>
          <option>Part Time</option>
        </select>
        {/* Job field */}

        <select defaultValue={"Job_Filed"} className="select select-bordered w-full max-w-xs">
          <option disabled >
            Job_Filed
          </option>
          <option>Engineering </option>
          <option>Marketing </option>
          <option>Finance </option>
          <option>Teaching </option>
        </select>

        {/* salary Rang */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-end  ">
          {/* Min salary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              name="min"
              type="number"
              placeholder="Job_company"
              className="input input-bordered"
              required
            />
          </div>
          {/* max salary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              name="max"
              type="number"
              placeholder="Job_company"
              className="input input-bordered"
              required
            />
          </div>
          {/* currency */}
          <select defaultValue={"currency"} name="currency" className="select select-bordered w-full max-w-xs">
            <option disabled >
            currency
            </option>
            <option>BDT </option>
            <option>USD</option>
            <option>INR </option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">company</span>
          </label>
          <input
            name="company"
            type="text"
            placeholder="Job_company"
            className="input input-bordered"
            required
          />
        </div>
        {/* requirements */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">requirement</span>
          </label>
          <textarea
            name="requirement"
            className="textarea"
            placeholder="Put is in a requirement in a new line "
            required
          ></textarea>
        </div>
        {/* Responsibility */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Responsibility</span>
          </label>
          <textarea
            name="responsibility"
            className="textarea"
            placeholder="Put is in a Responsibility in a new line "
            required
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Requirement</span>
          </label>
          <input
          type="text"
            name="hrname"
            className="textarea"
            placeholder="HR Name "
            required
            />
        </div>
        {/* hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input 
          type="email"
            name="hr_email"
            defaultValue={user.email}
            className="textarea"
            placeholder="HR_Email"
            required
            />
        </div>
        {/* ApplicationDeatLine */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Date line</span>
          </label>
          <input 
          type="date"
            name="applicationdateline"
            defaultValue={user.email}
            className="textarea"
            placeholder="Date Line"
            required
            />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            name="companylogo"
            type="url"
            placeholder="company_logo"
            className="input input-bordered"
            required
          />
        </div>

        {/* description */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit Button</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
