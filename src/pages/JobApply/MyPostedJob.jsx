import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import useAuth from "../../Hoock/UseAuth";

const MyPostedJob = () => {
    const {user} = useAuth()
const [job, setJob] = useState([])
useEffect(()=>{
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setJob(data);
    })
},[user.email])


    return (
        <div>
            <h2>My Posted Job {job.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job-title</th>
        <th>Application date line</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        job.map((yourjob, index )=> <tr key={yourjob._id}>
        <th>{index + 1} </th>
        <td>{yourjob.title}</td>
        <td>{yourjob.applicationdateline}</td>
        <td>Blue</td>
      </tr>
         )
      }
      
    
    </tbody>
  </table>
</div>


        </div>
    );
};

export default MyPostedJob;



