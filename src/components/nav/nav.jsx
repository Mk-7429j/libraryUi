// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../helper/data_helper";
import { Img_Helper } from "../../helper/img_helper";
import { checkLoginStatus } from "../../api";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { assignRole } from "../../redux/role_slice";

const Nav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchData = async () => {
    try {
      const result = await checkLoginStatus();
      const { email, first_name, role, _id } = _.get(result, "data.data", []);
      let preparedData = {
        email: email,
        name: first_name,
        role: role,
        _id: _id,
      };
      dispatch(assignRole(preparedData));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlechange = (res) => {
    navigate(`${res.path}`);
  };

  return (
    <nav className="bg-white w-full ">
      <div className="flex justify-between items-center px-[8vw] py-2 bg-amber-700">
        <div className="font-semibold hover:text-black text-amber-100 flex flex-row items-center gap-x-5">
          <div className="w-[80px] h-auto rounded bg-amber-100">
            <img
              src={Img_Helper.logo}
              alt=""
              className="w-full h-full bg-cover bg-center"
            />
          </div>
          <Link to={`/`}>ARCADIA BOOKS</Link>
        </div>

        <div className="hidden lg:flex justify-center items-center space-x-6">
          {navItems.map((res, index) => (
            <div key={index}>
              <div
                className={` uppercase hover:text-black font-semibold transition cursor-pointer ${
                  res.path === location.pathname
                    ? "text-black"
                    : "text-amber-100"
                }`}
                onClick={() => handlechange(res)}
              >
                {res.name}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden absolute w-full h-full right-0 top-0 bg-amber-700 text-center mt-4 cursor-pointer`}
        >
          {navItems.map((res, index) => (
            <div key={index} className="border-b border-amber-100 py-2">
              <div
                className="text-amber-100 text-lg hover:text-black block"
                onClick={() => handlechange(res)}
              >
                {res.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
