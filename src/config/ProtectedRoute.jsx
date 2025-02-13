/* eslint-disable react/prop-types */
import _ from "lodash";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("adminToken");
  const userData = useSelector((data) => data);
  const role = _.get(userData, "role.value.role", "");

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
