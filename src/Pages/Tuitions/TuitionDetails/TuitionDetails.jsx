import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { MdSubject } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../../../Hooks/useRole";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TuitionDetails = () => {
  const tuition = useLoaderData();
  // console.log(tuition);
  const { _id } = tuition;
  const { user } = useAuth();
  const { isTutor } = useRole();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    qualifications: "",
    experience: "",
    expectedSalary: "",
  });
  const axiosSecure = useAxiosSecure();

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      qualifications: "",
      experience: "",
      expectedSalary: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      studentEmail: tuition.email,
      tuitionID: tuition._id,
      subject: tuition.subject,
      bookedBy: user.email,
      applicantName: user.displayName || user.email,
      qualifications: formData.qualifications,
      experience: formData.experience,
      expectedSalary: formData.expectedSalary,
      status: "pending",
    };

    // 2. Use axiosSecure.post instead of fetch
    axiosSecure
      .post("/application", applicationData)
      .then((res) => {
        // Axios stores the response body in 'res.data'
        if (res.data.insertedId || res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          handleCloseModal();
        }
      })
      .catch((err) => {
        console.error("Error submitting application:", err);

        // Check if it's a 401 or 403 (handled by your interceptor,
        // but good to have a fallback message here)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.response?.data?.message || "Failed to submit application.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto py-30 ">
      <div className="md:flex gap-8">
        <div className="flex-3 bg-white px-7 md:px-15 py-10 rounded-md mb-5 shadow-lg">
          <div className="mb-8">
            <h2 className="text-accent font-semibold text-3xl">
              Student Informations
            </h2>
          </div>
          {/* Informations */}
          <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <BiCategory />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Category
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.category}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <MdSubject />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Subject
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.subject}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <SlCalender />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Per Week
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.days}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <BsGenderAmbiguous />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Tutor Gender
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.gender}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <FaRegMoneyBillAlt />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Salary
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.salary} USD
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <IoIosTimer />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Tutoring Time
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.time} PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-md h-fit p-10 space-y-3 shadow-sm">
          <div className="flex flex-col items-center ">
            <Link
              to="/contact"
              className="btn bg-black text-white border-black w-full"
            >
              Get Direction
            </Link>
          </div>
          {isTutor && (
            <div className="flex flex-col items-center">
              <button
                onClick={handleApply}
                className="btn bg-accent text-white border-[#e5e5e5] w-full "
              >
                Apply Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 ">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Application Form
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={user?.displayName || user?.email || ""}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Email Field (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Qualifications Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Enter your qualifications (e.g., Bachelor's in Mathematics)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Experience Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Describe your teaching experience"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Expected Salary Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 500 USD/month"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TuitionDetails;
