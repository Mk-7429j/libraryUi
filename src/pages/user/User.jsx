import _ from "lodash";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSingleUser } from "../../api";
import { Spin } from "antd";
import { token } from "../../helper/notification_helper";
import { useDispatch } from "react-redux";
import { assignRole } from "../../redux/role_slice.js";
 
const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getSingleUser();
      const response = _.get(result, "data.data", null);
      if (_.isEmpty(response) || _.get(response, "role", "") === "admin") {
        return navigate("/");
      }
      setUser(response);
    } catch (err) {
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUserLoginStatus = async () => {
    if (!localStorage.getItem(token)) {
      navigate("/auth");
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(token);
      dispatch(assignRole({}));
      navigate("/");
      
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin spinning={loading} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No user data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-2 py-1 rounded"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.user_img}
              alt="User"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <a
              href={user.user_img}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Full Image
            </a>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">First Name</p>
                <p className="font-semibold">{user.first_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="font-semibold">{user.last_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mobile Number</p>
                <p className="font-semibold">{user.mobile_number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold">{user.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">City</p>
                <p className="font-semibold">{user.city}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">State</p>
                <p className="font-semibold">{user.state}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Country</p>
                <p className="font-semibold">{user.country}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Pincode</p>
                <p className="font-semibold">{user.pincode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registration Number</p>
                <p className="font-semibold">{user.reg_no}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold capitalize">{user.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">QR Code</p>
                <div className="flex flex-col gap-2">
                  <img
                    src={user.qr_code_url}
                    alt="QR Code"
                    className="w-20 h-20 object-cover shadow-md"
                  />
                  <a
                    href={user.qr_code_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View QR Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
