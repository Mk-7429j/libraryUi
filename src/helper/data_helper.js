import { Img_Helper } from "./img_helper";

export const Home_links = [
  {
    id: 1,
    name: "Admin",
    path: "/admin",
    type: "home",
  },
  {
    id: 2,
    name: "User",
    path: "/user",
    type: "home",
  },
  {
    id: 3,
    name: "Attendance",
    path: "/attendance",
    type: "home",
  },
  {
    id: 4,
    name: "Books",
    path: "/books",
    type: "home",
  },
];

export const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Service", path: "/service" },
  { id: 3, name: "About Us", path: "/aboutus" },
  { id: 4, name: "Contactus", path: "/contactus" },
];

export const service_data = [
  {
    id: 1,
    img: Img_Helper.idcard,
    title: "Scanner-Based Attendance Tracking",
    para: "Our system integrates a scanner-based attendance feature that allows for quick and efficient tracking of members or visitors entering the library. By scanning library cards or QR codes, attendance is automatically logged, eliminating the need for manual check-ins and ensuring accurate, real-time attendance records.",
  },
  {
    id: 2,
    img: Img_Helper.book_time,
    title: "Automated Book Check-In & Check-Out",
    para: "With scanner-based technology, checking books in and out is seamless. Users can scan the barcode or RFID tag of books at the self-checkout stations, making the borrowing process faster and more efficient. This reduces waiting time and minimizes manual errors, ensuring accurate tracking of borrowed materials.",
  },
  {
    id: 3,
    img: Img_Helper.available_book,
    title: "Real-Time Book Availability & Status Updates",
    para: "With real-time book tracking, both library staff and users can instantly check the availability and status of any book. Whether a book is currently checked out or available, the system updates in real-time, making it easy for users to know if a book is available for borrowing or if they need to place a reservation.",
  },
  {
    id: 4,
    img: Img_Helper.overtime_alert,
    title: "Overdue Book Alerts & Notifications",
    para: "The scanner-based system automatically tracks due dates and sends out timely reminders to users about overdue books. With notifications sent via email, SMS, or app alerts, library users can easily return their borrowed books on time, reducing overdue fees and keeping the system organized.",
  },
  {
    id: 5,
    img: Img_Helper.admin_manage,
    title: "Efficient Book Inventory Management",
    para: "Using barcode or RFID scanners, library staff can conduct quick and accurate inventory audits. Books are scanned in bulk, allowing for efficient stock-taking, minimizing errors, and ensuring that the library’s collection is always up-to-date. This system also helps track lost or misplaced books.",
  },
  {
    id: 6,
    img: Img_Helper.user_histry,
    title: "Member Activity & Borrowing History Trackingg",
    para: "Our scanner-based system allows users to view their borrowing history, including past check-outs, due dates, and returns, directly through their accounts. This feature helps patrons keep track of their activity and plan future visits accordingly.",
  },
];

export const images = [
  {
    id: 1,
    img: Img_Helper.lib4,
  },
  {
    id: 2,
    img: Img_Helper.lib2,
  },
  {
    id: 3,
    img: Img_Helper.lib3,
  },
  {
    id: 4,
    img: Img_Helper.lib1,
  },
  {
    id: 5,
    img: Img_Helper.lib5,
  },
];
