import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cover1 from "../../assets/thisisengineering-TXxiFuQLBKQ-unsplash.webp";
import Cover2 from "../../assets/vitaly-gariev-qubcvHi6DBk-unsplash.webp";
import cover3 from "../../assets/vitaly-gariev-RX2fFAu0ZIM-unsplash.webp";
import { motion } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="pt-20">
      {" "}
      {/* Push content below fixed navbar */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          interval={4000}
        >
          {[cover1, Cover2, cover3].map((img, index) => (
            <div key={index} className="h-[65vh]">
              <img
                src={img}
                alt="cover"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center space-y-4 pl-15">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold md:text-5xl text-3xl font-primary text-white"
          >
            Country's <span className="text-accent">#1</span> Tuition <br />
            Matching Platform
          </motion.h1>

          <p className="font-secondary text-gray-200 text-lg md:text-xl ">
            Find Best Tutor And Tuition Here.
          </p>
          {/* Banner Button */}
          <div>
            <Link
              to="/about"
              className="btn bg-accent text-white font-primary font-bold hover:bg-[#222222] hover:border-[#222222] shadow-none border-none"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
