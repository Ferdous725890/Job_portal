import { useContext } from "react";
import { Link } from "react-router-dom";
import Authcontex from "../../Contex/AuthContext";

const NavBar = () => {
  const { user, signout } = useContext(Authcontex);
  const handelLogOut = () => {
    console.log("btn click");
    signout()
      .then((result) => {
        alert("Sign-out successful.", result.user);
      })
      .catch((error) => {
        alert("An error happened.", error);
      });
  };
  const links = (
    <>
     <li className="border px-2 duration-10 hover:bg-blue-500 rounded-md mr-2" > <Link to="/">Home</Link></li>
     <li className="border px-2 duration-10 hover:bg-blue-500 rounded-md mr-2" > <Link to="/myapplications">My Application </Link></li>
     <li className="border px-2 duration-10 hover:bg-blue-500 rounded-md mr-2" > <Link to="/addJob">Post A Job</Link></li>
     <li className="border px-2 duration-10 hover:bg-blue-500 rounded-md mr-2" > <Link to="/mypostedJob">My Job Post</Link></li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex justify-center items-center font-bold">
          <img className="w-14" src="https://i.ibb.co.com/n8kdfw0/jobportal.png" alt="" />
          <h2 className="text-2xl">Job Portal</h2>
          {
            user ? user.email :"user nei"
          }
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {user ? (
        <div className="navbar-end">
          <button
            onClick={handelLogOut}
            className=" mr-5 border border-secondary py-1 px-6 rounded-lg"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="signin"
            className="mr-5 border border-secondary py-1 px-6 rounded-lg "
          >
            Log-In
          </Link>
          <Link
            to="/ragister"
            className="mr-5 border border-secondary py-1 px-6 rounded-lg "
          >
            Ragister
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
