import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Attendance from "../pages/attendance/Attendance";
import Books from "../pages/books/Books";
import Client_layout from "../components/layout/Client_layout";
import App from "../App";
import Auth from "../components/auth/Auth";
import Contactus from "../pages/home/Contactus";
import Service from "../pages/home/Service";
import Aboutus from "../pages/home/Aboutus";
import User from "../pages/user/User";

let client_router = [
  {
    path: "/",
    element: <Client_layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
];

let admin_router = [];

const router = createBrowserRouter([...admin_router, ...client_router]);

export default router;
