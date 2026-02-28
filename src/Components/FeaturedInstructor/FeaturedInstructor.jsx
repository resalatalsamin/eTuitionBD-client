import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";

const FeaturedInstructor = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:3000/tutor-homepage")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  const handleTutorConfirm = (id) => {
    if (user) {
      Navigate(`/tuition-details/${id}`);
    } else {
      Navigate("/login");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-11/12 mx-auto lg:mb-20 mb-15"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center space-y-3 "
      >
        <h2 className="font-bold md:text-4xl text-3xl font-primary text-[#2d3748]">
          Featured <span className="text-accent">Instructors</span>
        </h2>
        <h3 className="font-secondary font-medium text-[#757575] text-3xl">
          Every Instructor is Professional and Highly Qualified
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4"
      >
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            onClick={handleTutorConfirm}
            className="md:w-[320px] w-full mb-5 md:mb-0 p-5 overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer h-fit bg-white rounded-lg shadow-lg"
          >
            <div className="text-center space-y-5 mt-2 ">
              <div className=" ">
                <div className=" flex flex-col items-center">
                  <img
                    className="rounded-[100%] w-28 h-28 mb-3 bg-accent p-1 object-cover"
                    src={tutor.photo}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl font-primary text-[#2d3748]">
                    {tutor.name}
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center  font-medium text-[#757575]">
                  <p>Experience: </p>
                  <p>{tutor.experience}</p>
                </div>
                <div className="flex justify-between items-center font-medium text-[#757575]">
                  <p>Qualification:</p>
                  <p>{tutor.qualification}</p>
                </div>
                <div className="flex justify-between items-center font-medium text-[#757575]">
                  <p>Salary:</p>
                  <p>{tutor.salary} BDT</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Extra cards starts from here */}

        {/* Extra car end above div */}
      </motion.div>
    </motion.div>
  );
};

export default FeaturedInstructor;
