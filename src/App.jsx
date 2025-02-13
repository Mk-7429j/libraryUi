/* eslint-disable react/prop-types */
import "./App.css";
import { motion } from "framer-motion";
import { Home_links, service_data } from "./helper/data_helper";
import { useNavigate } from "react-router-dom";
import Hero from "./pages/home/Hero";
import Gallery from "./pages/home/Gallery";
import Testimonials from "./pages/home/Testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Icon_Helper } from "./helper/icon_helper";
import { adminToken } from "./helper/notification_helper";

const GridButtons = ({ links, onButtonClick }) => {
  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="flex flex-row items-center justify-center gap-6"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map((res, index) => (
        <motion.button
          key={index}
          className="w-[150px] h-[150px] bg-amber-700 text-amber-100 font-semibold rounded shadow-lg hover:bg-amber-800 transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => onButtonClick(res)}
        >
          {res.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

const Services = ({ services, onServiceClick }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full px-[8vw] bg-amber-100 pb-10">
      <h1 className="text-amber-800 text-4xl font-semibold text-center py-10">
        Services
      </h1>
      <div className="relative flex items-center">
        <div ref={prevRef} className="absolute left-0 z-20 cursor-pointer -ml-5">
          <Icon_Helper.roundleft className="text-[40px] text-amber-700 hover:text-black transition duration-300" />
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
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {services.map((res, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative h-full w-full cursor-pointer py-5"
                onClick={() => onServiceClick(res)}
              >
                <div className="flex flex-col items-center justify-center rounded-3xl bg-white overflow-hidden p-5 shadow-lg ">
                  <div className="w-[250px] h-[250px] ">
                    <img
                      src={res.img}
                      alt={res.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h1 className="text-lg text-amber-800 font-semibold py-2 text-center ">
                    {res.title}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={nextRef} className="absolute right-0 z-20 cursor-pointer -mr-5">
          <Icon_Helper.roundRight className="text-[40px] text-amber-700 hover:text-black transition duration-300" />
        </div>
      </div>
    </section>
  );
};

function App() {
  const navigate = useNavigate();

  const handleGo = (res) => {
    if (res.type === "home") {
      if (res.id === 1 || res.id === 2) {
        if (!localStorage.getItem(adminToken)) {
          navigate(`/auth`);
        } else {
          navigate(res.path);
        }
      } else {
        navigate(res.path);
      }
    } else {
      navigate(`/service`);
    }
  };

  return (
    <div>
      <Hero />
      <div className="w-full min-h-screen flex items-center justify-center bg-amber-100">
        <GridButtons links={Home_links} onButtonClick={handleGo} />
      </div>
      <Services services={service_data} onServiceClick={handleGo} />
      <Testimonials />
      <Gallery />
    </div>
  );
}

export default App;
