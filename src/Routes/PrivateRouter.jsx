import React, { useContext } from "react";
import Authcontex from "../Contex/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
  const { user, loding } = useContext(Authcontex);

  const location = useLocation()
  console.log(location);
  
 if(loding){
    return <span className="loading loading-spinner text-primary"></span>
 }

//   const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };

  return user ? children : <Navigate to={`/signin`} state={location?.pathname}></Navigate>
};

export default PrivateRouter;
