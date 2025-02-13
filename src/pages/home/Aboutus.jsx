// eslint-disable-next-line no-unused-vars
import React from "react";
import { Icon_Helper } from "../../helper/icon_helper";

const Aboutus = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 py-10 font-sans bg-amber-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-amber-800 mb-6">
        About Us
      </h1>
      <p className="text-lg text-amber-600 leading-relaxed mb-6">
        Welcome to{" "}
        <span className="text-amber-800 font-semibold">Arcadia Books</span>,
        where we’re revolutionizing the library experience with cutting-edge
        technology. Our mission is to empower libraries with smart, efficient,
        and user-friendly tools to streamline operations and enhance both staff
        and user experiences.
      </p>
      <p className="text-lg text-amber-600 leading-relaxed mb-6">
        We understand the complexities that libraries face in managing extensive
        collections, keeping track of borrowings, and ensuring accurate
        inventory. That’s why we’ve developed{" "}
        <span className="text-amber-800 font-semibold">
          Arcadia Books’ Library Management System
        </span>{" "}
        — a seamless solution that simplifies daily tasks and optimizes library
        management.
      </p>

      <div className="flex flex-col sm:flex-row sm:gap-10 mb-8">
        <div className="flex-1 mb-6 sm:mb-0">
          <div className="flex flex-row text-amber-800 items-center gap-x-3 py-5">
            <div className="px-2 py-2 rounded border border-amber-800 bg-amber-100">
              <Icon_Helper.horn className="inline-block  size-[20px]" />
            </div>
            <div className="text-2xl font-semibold ">Our Vision</div>
          </div>
          <p className="text-lg text-amber-600 leading-relaxed mb-6">
            At{" "}
            <span className="text-amber-800 font-semibold">Arcadia Books</span>,
            we envision a future where libraries no longer struggle with manual
            processes but instead focus on what matters most: serving their
            communities and fostering a love of learning. Our goal is to provide
            libraries with the tools they need to run smoothly, effectively, and
            in real-time, making the library experience better for everyone.
          </p>
        </div>

        <div className="flex-1">
          <div className="flex flex-row text-amber-800 items-center gap-x-3 py-5">
            <div className="px-2 py-2 rounded border border-amber-800 bg-amber-100">
              <Icon_Helper.bookmark className="inline-block size-[20px]" />
            </div>
            <div className="text-2xl font-semibold">What We Do</div>
          </div>
          <p className="text-lg text-amber-600 leading-relaxed mb-6">
            Our comprehensive library management system is designed to support
            libraries in managing everything from member attendance and book
            checkouts to real-time inventory updates and overdue alerts. We aim
            to reduce human error, improve efficiency, and make the library
            experience as fast and user-friendly as possible for both staff and
            visitors.
          </p>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mt-8 mb-4">
        <div className="flex flex-row items-center gap-x-3 py-5">
          <div className="px-2 py-2 rounded border bg-amber-100">
            <Icon_Helper.tik className="" />
          </div>
          <div className="text-2xl font-semibold">
            Key Features of the Arcadia Books Library Management System:
          </div>
        </div>
      </h3>
      <ul className="list-disc pl-6 text-lg text-amber-600 mb-6 space-y-2">
        <li>
          <span className="font-semibold text-amber-800">
            Efficient Attendance Tracking:
          </span>{" "}
          Automatically log attendance with barcode or QR code scanning for easy
          and accurate member check-ins.
        </li>
        <li>
          <span className="font-semibold text-amber-800">
            Seamless Book Check-In & Check-Out:
          </span>{" "}
          Enable self-checkout stations with barcode/RFID scanning to streamline
          borrowing and reduce wait times.
        </li>
        <li>
          <span className="font-semibold text-amber-800">
            Real-Time Book Availability:
          </span>{" "}
          Instantly update book availability and status, allowing users and
          staff to check if a book is available or checked out.
        </li>
        <li>
          <span className="font-semibold text-amber-800">
            Overdue Alerts & Notifications:
          </span>{" "}
          Send automatic reminders via email, SMS, or app alerts to help users
          return books on time and reduce overdue fees.
        </li>
        <li>
          <span className="font-semibold text-amber-800">
            Inventory Management:
          </span>{" "}
          Conduct quick and precise inventory audits using barcode/RFID
          scanning, ensuring books are always accurately accounted for.
        </li>
        <li>
          <span className="font-semibold text-amber-800">
            Member Activity Tracking:
          </span>{" "}
          Let users view their borrowing history, including due dates and return
          statuses, directly from their accounts.
        </li>
      </ul>

      <div className="flex flex-row items-center text-amber-800 gap-x-3 py-5">
        <div className="px-2 py-2 rounded border border-amber-800 bg-amber-100">
          <Icon_Helper.users className="inline-block size-[20px]" />
        </div>
        <div className="text-2xl font-semibold">Our Commitment</div>
      </div>
      <p className="text-lg text-amber-600 leading-relaxed mb-6">
        At <span className="font-semibold text-amber-800">Arcadia Books</span>,
        we are committed to supporting libraries of all sizes in embracing
        digital solutions that enhance operational efficiency and improve the
        user experience. Whether you’re a small community library or a large
        public institution, we provide a system that grows with you, continually
        improving to meet the needs of modern libraries.
      </p>
      <p className="text-lg text-amber-600 leading-relaxed mb-6">
        We strive to ensure that our platform is simple, intuitive, and
        continuously evolving. By combining technology with a passion for books,
        we are shaping the future of libraries, ensuring they remain vibrant and
        accessible for generations to come.
      </p>

      <p className="text-xl text-center text-amber-600 mt-8">
        Join us at{" "}
        <span className="font-semibold text-amber-800">Arcadia Books</span> and
        be part of the future of library management!
      </p>
    </div>
  );
};

export default Aboutus;
