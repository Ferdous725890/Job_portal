import React, { useEffect, useState } from 'react';
import useAuth from '../../Hoock/UseAuth';

const MyApplyction = () => {
    const {user} = useAuth()
    const [jobs , setJobs] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/jobappliction?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data);
        })
    },[user.email])
    return (
        <div>
            jobs {
                jobs.length
            }
        </div>
    );
};

export default MyApplyction;