// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Icon_Helper } from "../../helper/icon_helper";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full px-4 sm:px-10 lg:px-20 py-10 bg-amber-100">
      <h1 className="text-3xl font-bold text-amber-800 text-center mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="w-full h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.183212512708!2d-73.9682854!3d40.785091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25863b6d8c6b7%3A0x79f287f3425ed1bb!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1615467035149!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ borderRadius: "8px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="w-full h-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-x-4">
              <div className="p-3 bg-amber-600 text-amber-100 rounded-full">
                <Icon_Helper.location />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-amber-800">
                  Address
                </h1>
                <div className="text-amber-600">
                  123 Arcadia Lane, City, Country
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="p-3 bg-amber-600 text-amber-100 rounded-full">
                <Icon_Helper.phone />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-amber-800">Phone</h1>
                <div className="text-amber-600">+1 234 567 890</div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="p-3 bg-amber-600 text-amber-100 rounded-full">
                <Icon_Helper.email />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-amber-800">Email</h1>
                <div className="text-amber-600">contact@arcadiabooks.com</div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="p-3 bg-amber-600 text-amber-100 rounded-full">
                <Icon_Helper.time />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-amber-800">
                  Working Hours
                </h1>
                <div className="text-amber-600">
                  Monday to Friday, 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2 text-black">
            <Icon_Helper.user className="inline-block mr-2 text-amber-800" />{" "}
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2 text-black">
            <Icon_Helper.email className="inline-block mr-2 text-amber-800" />{" "}
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2 text-black">
            <Icon_Helper.message className="inline-block mr-2 text-amber-800" />{" "}
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="5"
            className="w-full p-3 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full  px-6 py-3 bg-amber-800 text-white font-semibold rounded-lg hover:text-amber-800 hover:bg-amber-100 hover:border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-800 transition duration-200"
          >
            <Icon_Helper.mail2 className="inline-block mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
