// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar, Rate } from "antd";
import { Icon_Helper } from "../../helper/icon_helper";
import { Img_Helper } from "../../helper/img_helper";

const libraryTestimonials = [
  {
    id: 1,
    rate: 5,
    date: "January 10, 2025",
    time: "9:30 AM",
    name: "Sarah Thompson",
    place: "Central Library, New York",
    para: "The Arcadia Books Library Management System has completely transformed how we manage our collection. It's streamlined everything from checkouts to inventory, making our day-to-day operations so much easier and more efficient.",
  },
  {
    id: 2,
    rate: 4.5,
    date: "February 2, 2025",
    time: "3:15 PM",
    name: "David Singh",
    place: "City Library, London",
    para: "We've been using Arcadia's system for several months now, and the difference it has made in tracking attendance and managing overdue books is impressive. The system is intuitive, and our staff has had no trouble adjusting to it.",
  },
  {
    id: 3,
    rate: 5,
    date: "January 25, 2025",
    time: "11:45 AM",
    name: "Anna Williams",
    place: "University Library, Boston",
    para: "The real-time inventory updates and overdue alerts have been a game-changer for us. No more tracking books manually. It’s saved us hours each week, and our patrons love the self-checkout feature.",
  },
  {
    id: 4,
    rate: 4,
    date: "January 18, 2025",
    time: "2:30 PM",
    name: "Carlos Garcia",
    place: "Public Library, Madrid",
    para: "As a library that serves a large community, we needed a reliable system to keep track of everything. Arcadia Books has helped us automate many processes, from book check-ins to member activity tracking, and the result has been excellent.",
  },
  {
    id: 5,
    rate: 4.5,
    date: "December 30, 2024",
    time: "4:00 PM",
    name: "Linda Patel",
    place: "Regional Library, Delhi",
    para: "We’ve seen a significant reduction in human error and better efficiency thanks to Arcadia's library management system. The ability to quickly update book availability and send overdue alerts has improved our service immensely.",
  },
  {
    id: 6,
    rate: 5,
    date: "February 1, 2025",
    time: "10:15 AM",
    name: "John D. Williams",
    place: "Public Library, Los Angeles",
    para: "The Arcadia Books system has not only improved our operational efficiency but also made the library experience much smoother for our members. The barcode scanning system for attendance and book checkouts is fast and simple to use. Our staff loves it!",
  },
  {
    id: 7,
    rate: 4.5,
    date: "January 8, 2025",
    time: "5:00 PM",
    name: "Mia Roberts",
    place: "Community Library, Toronto",
    para: "Arcadia's system is perfect for our small library. It’s easy to use and ensures that we stay on top of our inventory, member activities, and overdue books. I highly recommend it to other libraries looking for a reliable and user-friendly solution.",
  },
  {
    id: 8,
    rate: 4,
    date: "December 18, 2024",
    time: "7:30 AM",
    name: "Marcus Lee",
    place: "City Central Library, Sydney",
    para: "Since we implemented Arcadia Books' system, we've noticed a significant improvement in our library's efficiency. The system has a user-friendly interface, and the staff is now more confident in managing book check-ins and member records.",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-amber-100 h-auto px-6 py-10">
      <p className="font-title text-amber-700 text-center text-primary pb-3">Testimonial</p>
      <h1 className="text-3xl text-amber-800 font-pri_head font-semibold text-center mb-10">
        Regards <span className="text-primary">From</span> Users
      </h1>

      <div className="relative flex items-center">
        <div
          ref={prevRef}
          className="absolute left-0 z-20 cursor-pointer -ml-3"
        >
          <Icon_Helper.roundleft className="text-3xl text-gray-600 hover:text-black transition duration-300" />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {libraryTestimonials
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((res) => {
              return (
                <SwiperSlide key={res.id}>
                  <div className="flex flex-col items-center w-full h-auto px-2 py-10">
                    <div className="relative shadow-xl rounded-lg bg-white mb-6 p-6 w-full ">
                      <p className="text-center text-para font-pri_para mb-4 text-lg">
                        <q className="italic">{res.para}</q>
                      </p>

                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <Rate allowHalf defaultValue={res.rate} />
                        </div>
                        <div className="opacity-40 w-auto h-[20px]">
                          <img
                            src={Img_Helper.testimoniallogo}
                            alt="Library Logo"
                            className="w-full h-full"
                          />
                        </div>

                        <div className="text-left py-2">
                          <p className="text-sm font-pri_head">{res.date}</p>
                          <p className="text-xs text-para font-pri_head">
                            {res.time}
                          </p>
                        </div>
                      </div>
                      <div className="w-0 h-0 absolute -bottom-2 shadow-2xl border-l-[40px] border-r-[40px] border-b-[30px] rotate-90 border-transparent border-b-white"></div>
                    </div>

                    <div className="flex p-2 rounded-lg flex-row gap-3 items-center justify-start">
                      <div className="w-[50px] h-[50px]">
                        <Avatar
                          src={res.img || "/path/to/default-avatar.jpg"} 
                          size={50}
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                          className="!bg-amber-700"
                        >
                          {res.name.charAt(0)}
                        </Avatar>
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg text-amber-800 font-semibold">{res.name}</h3>
                        <p className="text-sm text-primary text-amber-700">{res.place}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div
          ref={nextRef}
          className="absolute right-0 z-20 cursor-pointer -mr-3"
        >
          <Icon_Helper.roundRight className="text-3xl text-gray-600 hover:text-black transition duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
