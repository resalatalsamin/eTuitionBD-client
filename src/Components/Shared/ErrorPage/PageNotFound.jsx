import {} from "motion/react-client";
import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto mb-30 ">
        <div className="mt-30 text-center space-y-3 ">
          <h2 className="font-bold md:text-5xl text-4xl font-primary text-[#2d3748] pt-10">
            404 Page <span className="text-accent">Not Found</span>
          </h2>
          <h3 className="font-secondary font-medium text-[#757575] text-3xl">
            The Page You are Looking for, is Not Found
          </h3>
          <Link
            to="/"
            className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222] mb-10"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
