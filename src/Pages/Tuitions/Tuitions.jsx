import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdSubject } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Navigate, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Tuitions = () => {
  const [tuitions, setTuitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:3000/tuitions")
      .then((res) => res.json())
      .then((data) => {
        setTuitions(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  const handleTuitionDetails = (id) => {
    if (user) {
      Navigate(`/tuition-details/${id}`);
    } else {
      Navigate("/login");
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mb-30 ">
        <div className="mt-10 text-center space-y-3">
          <h2 className="font-bold md:text-5xl text-4xl font-primary text-[#2d3748]">
            Our <span className="text-accent">Listed Tuitions</span>
          </h2>
          <h3 className="font-secondary font-medium text-[#757575] text-3xl">
            Find All The Tuitions in One Place
          </h3>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {/* 1st card */}
          {tuitions.map((tuition) => (
            <div key={tuition._id} className="rounded-lg p-7 bg-white">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl font-medium font-primary text-[#2d3748]">
                  Class {tuition.class}
                </h4>
                {/* <p className="text-[#757575] text-xl">Job Id: </p> */}
              </div>
              <div className="mb-5">
                <p className="flex items-center gap-2 text-xl font-medium text-[#2d3748]">
                  <span>
                    <FaLocationDot />
                  </span>{" "}
                  {tuition.location}
                </p>
              </div>
              {/* subject, per week etc */}
              <div className=" grid md:grid-cols-3 grid-cols-2 justify-between">
                <div className="mb-5 ">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <MdSubject />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Subject
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.subject}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div className="mb-5 ">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <SlCalender />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Per Week
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.days}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="mb-5">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <BsGenderAmbiguous />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Tutor Gender
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.gender}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 4th */}
                <div className="mb-5">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <FaRegMoneyBillAlt />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Salary
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.salary} USD
                      </p>
                    </div>
                  </div>
                </div>
                {/* 5th */}
                <div className="mb-5">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <IoIosTimer />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Tutoring Time
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.time} PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <BiCategory />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                        Study Medium
                      </h4>
                      <p className="text-md text-[#757575] font-primary ">
                        {tuition.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleTuitionDetails(tuition._id)}
                  className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
          {/* 1st card end */}
        </div>
      </div>
    </div>
  );
};

export default Tuitions;
