import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="w-full bg-base-200 mb-30 shadow">
        <div>
          <h2 className="text-[#2d3748] text-center font-primary font-bold text-3xl md:text-4xl pt-20">
            Why Choose <span className="text-accent">Us</span>
          </h2>
        </div>
        <div className="pt-10 pb-20 md:max-w-10/12 mx-auto text-white ">
          <div className="">
            <div className="  md:grid md:grid-cols-4">
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit md:border-r  border-gray-500">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Verified Tutors
                </h3>
                <p className="font-secondary text-[#757575]">
                  All tutors are reviewed, verified, and approved to ensure
                  safe, quality learning.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit md:border-r border-gray-500">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Trusted Tuition Posts
                </h3>
                <p className="font-secondary text-[#757575]">
                  Every tuition request is checked to keep tutors away from fake
                  or misleading posts.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit md:border-r border-gray-500">
                <img
                  className="rounded-full w-25 brightness-80"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Easy & Fast Matching
                </h3>
                <p className="font-secondary text-[#757575]">
                  Post requirements and connect with suitable tutors quickly
                  through a simple process.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit ">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Secure Payments
                </h3>
                <p className="font-secondary text-[#757575]">
                  Transparent, secure payment system ensures trust between
                  students and tutors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
