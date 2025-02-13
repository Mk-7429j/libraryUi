/* eslint-disable no-unused-vars */
import React from "react";
import { service_data } from "../../helper/data_helper";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="w-full px-[8vw] bg-amber-100 py-10">
      <div className="w-full h-auto rounded-2xl bg-white flex flex-row justify-between items-center gap-y-2 py-5 px-10 mb-10">
        <div className="flex flex-row items-center gap-x-3">
          <Link to={`/`} className="text-black text-2xl font-semibold">
            Home
          </Link>
          <span className="text-sm font-semibold">/</span>
          <h1 className="text-blue-600 text-2xl font-semibold">Services</h1>
        </div>
        <h1 className="text-black text-2xl font-semibold text-center">
          Services
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {service_data.map((res, index) => (
          <div key={index} className="group relative">
            <div
              className={` flex  items-center justify-center gap-10  ${
                index % 2 === 0 ? "flex-row " : "flex-row-reverse"
              }`}
            >
              <div className="w-full h-full ">
                <img
                  src={res.img}
                  alt={res.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-y-3">
                <h1 className="text-2xl text-amber-800 font-semibold py-2 text-center ">
                  {res.title}
                </h1>
                <p className="text-amber-600 text-xl">{res.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
