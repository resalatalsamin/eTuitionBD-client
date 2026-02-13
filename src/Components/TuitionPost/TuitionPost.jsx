import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaTransgender } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdSubject } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { motion } from "motion/react";
import { Link } from "react-router";

const TuitionPost = () => {
  const [tuitions, setTuitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/tuition-homepage")
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-11/12 mx-auto mb-30"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-5 "
      >
        {/* 1st card */}
        {tuitions.map((tuition) => (
          <div
            key={tuition._id}
            className="rounded-lg p-7 bg-white transition-transform duration-500 group-hover:scale-105"
          >
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
              <Link
                to="/tuition-details"
                className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
        {/* 1st card end */}
      </motion.div>
    </motion.div>
  );
};

export default TuitionPost;
