import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch("e-tuition-bd-server-three.vercel.app/tutors")
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
    <div className="w-11/12 mx-auto mb-30 ">
      <div className="mt-10 text-center space-y-3 ">
        <h2 className="font-bold md:text-5xl text-4xl font-primary text-[#2d3748]">
          Our <span className="text-accent">Listed Tutors</span>
        </h2>
        <h3 className="font-secondary font-medium text-[#757575] text-3xl">
          Every Instructor is Professional and Highly Qualified
        </h3>
      </div>
      <div className="mt-10 md:grid md:grid-cols-4 md:gap-5 mb-5">
        {tutors.map((tutor) => (
          <div
            onClick={handleTutorConfirm}
            className="md:w-[320px] w-full border border-gray-300 bg-white mb-5 md:mb-0 p-5 rounded-lg overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer shadow"
          >
            {/* <div className="overflow-hidden relative">
                <img
                  className="object-center object-cover h-[200px] md:w-[320px] w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                  src={education1}
                  alt=""
                />
              </div> */}
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
      </div>
    </div>
  );
};

export default Tutors;
