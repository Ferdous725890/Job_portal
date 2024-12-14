import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../LayOut/MainLayout";
import Ragister from "../Ragister/Ragister";
import SignIn from "../Ragister/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplyction from "../pages/JobApply/MyApplyction";
import AddJob from "../pages/JobApply/AddJob";
import MyPostedJob from "../pages/JobApply/MyPostedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>,
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path:"/myapplications",
        element:<PrivateRouter>
          <MyApplyction></MyApplyction>
        </PrivateRouter>,
      },
      {
        path:"mypostedJob",
        element:
        <PrivateRouter>
          <MyPostedJob></MyPostedJob>
        </PrivateRouter>
      },
      {
        path:"/addJob",
        element:
        <PrivateRouter>

          <AddJob></AddJob>,
        </PrivateRouter>
      },
      {
        path: "jobapply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "ragister",
        element: <Ragister></Ragister>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
