import React, { useEffect, useState } from "react";

import { motion } from "motion/react";
import education1 from "../../assets/education1.png";

import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";

const FeaturedInstructor = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch("e-tuition-bd-server-three.vercel.app/tutor-homepage")
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
      className="w-11/12 mx-auto mb-30 "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 text-center space-y-3 "
      >
        <h2 className="font-bold md:text-5xl text-4xl font-primary text-[#2d3748]">
          Our Featured <span className="text-accent">Instructors</span>
        </h2>
        <h3 className="font-secondary font-medium text-[#757575] text-3xl">
          Every Instructor is Professional and Highly Qualified
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 md:flex md:gap-8 "
      >
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            onClick={handleTutorConfirm}
            className="md:w-[320px] w-full border border-gray-300 bg-white mb-5 md:mb-0 p-5 rounded-lg overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer"
          >
            <div className="overflow-hidden relative">
              <img
                className="object-center object-cover h-[200px] md:w-[320px] w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                src={education1}
                alt=""
              />
            </div>
            <div className="text-center space-y-1 mt-2">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="rounded-[300%] h-12 w-12"
                    src={tutor.photo}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl font-primary text-[#2d3748]">
                    {tutor.name}
                  </h3>
                  <p className="font-medium font-secondary text-lg text-[#757575]">
                    {tutor.location}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center  font-medium text-[#757575]">
                  <p>Mobile: </p>
                  <p>{tutor.phone}</p>
                </div>
                <div className="flex justify-between items-center font-medium text-[#757575]">
                  <p>Qualification:</p>
                  <p>{tutor.qualification}</p>
                </div>
                <div className="flex justify-between items-center font-medium text-[#757575]">
                  <p>Salary:</p>
                  <p>{tutor.salary} USD</p>
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
