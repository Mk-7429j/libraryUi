// eslint-disable-next-line no-unused-vars
import React, { useCallback } from "react";
import { Home_links, navItems } from "../../helper/data_helper";
import { useNavigate } from "react-router-dom";
import { Img_Helper } from "../../helper/img_helper";
import { useSelector } from "react-redux";
import _ from "lodash";
import { token } from "../../helper/notification_helper";

const Foot = () => {
  const navigate = useNavigate();
  const userData = useSelector((data) => data);
  const role = _.get(userData, "role.value.role", []);
  const handleNavigation = useCallback(
    (res) => {
      const isAdminRestricted = res?.id === 1;
      const isUserRestricted = res?.id === 2;
      const isAdminLoggedIn = localStorage.getItem(token);

      if (!isAdminLoggedIn) {
        navigate(`/auth`);
        return;
      }

      if (role === "admin" && isAdminRestricted) {
        navigate(res?.path || "/");
        return;
      }

      if (role === "user" && isUserRestricted) {
        navigate(res?.path || "/");
        return;
      }

      navigate(res?.path);
    },
    [navigate, role]
  );

  return (
    <footer className="bg-amber-700 text-amber-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="font-semibold text-lg mb-2">ARCADIA BOOKS</h2>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-x-5">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`hover:text-black font-semibold cursor-pointer ${
                  item.path === location.pathname
                    ? "text-black"
                    : "text-amber-100"
                }`}
                onClick={() => handleNavigation(item)}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="w-[100px] h-auto bg-white rounded">
            <img
              src={Img_Helper.logo}
              alt="Arcadia Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-row items-center gap-x-5">
            {Home_links.map((link, index) => (
              <div
                key={index}
                className="text-amber-100 cursor-pointer font-semibold hover:text-black"
                onClick={() => handleNavigation(link)}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p>
            &copy; {new Date().getFullYear()} Arcadia Books. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
