import React from "react";
import user from "../../assets/profile-picture.webp";
import verified from "../../assets/maps-and-flags.webp";
import matching from "../../assets/green-power.webp";
import money from "../../assets/money.webp";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  return (
    <div className="lg:my-20 my-15 w/11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center space-y-3 "
      >
        <h2 className="font-bold md:text-4xl text-3xl font-primary text-[#2d3748] mb-10">
          Why <span className="text-accent">Choose</span> Us
        </h2>
      </motion.div>

      {/* 1st card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:flex items-center mb-10"
      >
        <div className="lg:w-6/12 w-11/12 mx-auto bg-white rounded-lg shadow-lg lg:flex items-center">
          <div className="pt-10 lg:pt-0 pl-10 lg:pr-20 pr-10 pb-10 lg:pb-0">
            <h3 className="font-primary text-accent font-bold text-xl mb-4 lg:mb-0">
              VERIFIED TUTORS
            </h3>
            <p className="text-[#757575] text-md">
              All tutors are reviewed, verified, and approved to ensure safe,
              quality learning.
            </p>
          </div>
          <div className="p-10 lg:rounded-r-lg rounded-r-0  bg-accent flex lg:flex-none flex-col items-center">
            <img className="w-10" src={user} alt="" />
          </div>
        </div>
        <div className="w-.5/12 ml-[-300px] mx-auto hidden lg:inline-block">
          <h4 className="bg-accent rounded-full py-7 px-9.5 font-extrabold text-2xl text-white">
            1
          </h4>
        </div>
      </motion.div>
      {/* 2nd card */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:flex items-center mb-10"
      >
        <div className="w-.5/12 mr-[-300px] mx-auto hidden lg:inline-block">
          <h4 className="bg-accent rounded-full py-7 px-9.5 font-extrabold text-2xl text-white">
            2
          </h4>
        </div>

        <div className="lg:w-6/12 w-11/12 mx-auto bg-white rounded-lg shadow-lg lg:flex items-center">
          <div className="p-10 lg:rounded-l-lg rounded-l-0  bg-accent flex lg:flex-none flex-col items-center">
            <img className="w-10" src={verified} alt="" />
          </div>
          <div className="pt-10 lg:pt-0 pl-10 lg:pr-20 pr-10 pb-10 lg:pb-0">
            <h3 className="font-primary text-accent font-bold text-xl mb-4 lg:mb-0">
              TRUSTED TUITION POSTS
            </h3>
            <p className="text-[#757575] text-md">
              Every tuition request is checked to keep tutors away from fake or
              misleading posts.
            </p>
          </div>
        </div>
      </motion.div>
      {/* 3rd card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:flex items-center mb-10"
      >
        <div className="lg:w-6/12 w-11/12 mx-auto bg-white rounded-lg shadow-lg lg:flex items-center">
          <div className="pt-10 lg:pt-0 pl-10 lg:pr-20 pr-10 pb-10 lg:pb-0">
            <h3 className="font-primary text-accent font-bold text-xl mb-4 lg:mb-0">
              EASY & FAST MATCHING
            </h3>
            <p className="text-[#757575] text-md">
              Post requirements and connect with suitable tutors quickly through
              a simple process.
            </p>
          </div>
          <div className="p-10 lg:rounded-r-lg rounded-r-0  bg-accent flex lg:flex-none flex-col items-center">
            <img className="w-10" src={matching} alt="" />
          </div>
        </div>
        <div className="w-.5/12 ml-[-300px] mx-auto hidden lg:inline-block">
          <h4 className="bg-accent rounded-full py-7 px-9.5 font-extrabold text-2xl text-white">
            3
          </h4>
        </div>
      </motion.div>
      {/* 4rth card */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:flex items-center mb-10"
      >
        <div className="w-.5/12 mr-[-300px] mx-auto hidden lg:inline-block">
          <h4 className="bg-accent rounded-full py-7 px-9.5 font-extrabold text-2xl text-white">
            4
          </h4>
        </div>

        <div className="lg:w-6/12 w-11/12 mx-auto bg-white rounded-lg shadow-lg lg:flex items-center">
          <div className="p-10 lg:rounded-l-lg rounded-l-0  bg-accent flex lg:flex-none flex-col items-center">
            <img className="w-10" src={money} alt="" />
          </div>
          <div className="pt-10 lg:pt-0 pl-10 lg:pr-20 pr-10 pb-10 lg:pb-0">
            <h3 className="font-primary text-accent font-bold text-xl mb-4 lg:mb-0">
              SECURE PAYMENTS
            </h3>
            <p className="text-[#757575] text-md">
              Transparent, secure payment system ensures trust between students
              and tutors.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
