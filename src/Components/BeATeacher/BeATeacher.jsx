import React from "react";
import { Link } from "react-router";

const BeATeacher = () => {
  return (
    <div className="lg:pt-20 pt-15 lg:w-10/12 w-11/12 mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="lg:grid grid-cols-3 items-center py-10 lg:px-30 text-center space-y-5 lg:space-y-0">
          <h3 className="font-primary lg:border-r-2 border-r-0 border-gray-300 text-[#2d3748] font-semibold text-xl px-10">
            WANT TO BECOME <br />
            <span className="text-accent md:text-4xl text-3xl font-bold">
              TUTOR
            </span>
          </h3>
          <p className=" lg:border-r-2 border-r-0 border-gray-300 font-secondary text-[#2d3748] text-xl font-semibold px-10">
            Let's Work Together & Explore New Opportunities
          </p>
          <Link
            to="/register"
            className="btn bg-accent text-white font-primary font-bold hover:bg-[#222222] hover:border-[#222222] mx-25"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeATeacher;
