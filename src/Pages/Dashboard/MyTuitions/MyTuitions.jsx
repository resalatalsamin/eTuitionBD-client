import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyTuitions = () => {
  const navigate = useNavigate();
  const updateModalRef = useRef(null);
  const { user, authToken, isStudent, loading: authLoading } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // If auth is still checking, do nothing yet
    if (authLoading) return;

    // If auth finished and user is NOT a student
    if (!isStudent) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only students can manage tuition listings!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    }
  }, [isStudent, authLoading, navigate]);

  // modal
  const handleUpdateModalOpen = (listing) => {
    setCurrentListing(listing);
    updateModalRef.current.showModal();
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const updatedForm = {
      salary: e.target.salary.value,
      subject: e.target.subject.value,
      time: e.target.time.value,
      days: e.target.days.value,
      location: e.target.location.value,
      class: e.target.class.value,
    };

    // sending data to server
    fetch(`http://localhost:3000/update-tuition/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedForm),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tuition updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        updateModalRef.current.close();
        setIsDeleted(true); // Trigger refresh
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to update tuition.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    if (!user?.email || !authToken) return;
    // We use axiosSecure instead of fetch
    axiosSecure
      .get(`/my-tuitions?email=${user.email}`)
      .then((res) => {
        // Axios puts the data inside a 'data' property
        setListings(res.data);
        setLoading(false);
        setIsDeleted(false);
      })
      .catch((err) => {
        console.error("Error fetching tuitions:", err);
        setLoading(false);
      });
  }, [isDeleted, user.email, axiosSecure, authToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl text-accent"></span>
      </div>
    );
  }

  // delete
  const handleDelete = (id) => {
    setIsDeleted(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tuition/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            // console.log(data);
            setIsDeleted(true);
            Swal.fire({
              title: "Deleted!",
              text: "Your listing has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // View applications
  const handleViewApplications = (id) => {
    navigate(`/dashboard/tuition-applications/${id}`);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mb-20 mt-20">
        <div>
          <h2 className="text-[#2d3748] text-center font-primary font-bold text-3xl md:text-4xl pb-10">
            My <span className="text-accent">Tuition Listings</span>
          </h2>
        </div>
        <div className="max-w-6xl w-full rounded-md overflow-hidden border border-borderColor mt-6 mb-15 font-secondary overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-[#253241]">
            <thead className="text-[#253241] bg-gray-50">
              <tr>
                <th className="p-3 font-medium">Subject</th>
                <th className="p-3 font-medium max-md:hidden">Time</th>
                <th className="p-3 font-medium">Days</th>
                <th className="p-3 font-medium max-md:hidden">Salary</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr
                  key={index}
                  className="border-t border-borderColor hover:bg-gray-50"
                >
                  <td className="p-3">
                    <p className="font-medium">{listing.subject}</p>
                    <p className="text-xs text-gray-500">
                      Class {listing.class}
                    </p>
                  </td>
                  <td className="p-3 max-md:hidden">{listing.time} PM</td>
                  <td className="p-3">{listing.days}/week</td>
                  <td className="p-3 max-md:hidden">{listing.salary} BDT</td>
                  <td className="p-3">
                    <div className="grid md:grid-cols-2 items-center gap-5 ">
                      {/* View Applications Button */}
                      <button
                        onClick={() => handleViewApplications(listing._id)}
                        title="View Applications"
                        className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]"
                      >
                        Applied Tutors
                      </button>

                      <div>
                        {/* Edit Button */}
                        <button
                          onClick={() => handleUpdateModalOpen(listing)}
                          title="Edit"
                          className="p-2 hover:bg-green-50 rounded-md transition-colors"
                        >
                          <FaRegEdit className="text-green-600 text-lg" />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(listing._id)}
                          title="Delete"
                          className="p-2 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <MdDeleteOutline className="text-red-600 text-xl" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Modal */}
      <dialog
        ref={updateModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg">Update Your Tuition Details!</h3>
          <p className="py-4">Choose the best for you.</p>

          {currentListing && (
            <form
              onSubmit={(e) => handleUpdate(e, currentListing._id)}
              className="flex flex-col gap-5 text-sm mt-6 font-secondary text-[#253241]"
            >
              {/* Subject and Days */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col w-full">
                  <label className="font-medium mb-1">Subject</label>
                  <select
                    defaultValue={currentListing?.subject}
                    className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                    name="subject"
                  >
                    <option value="">Select a subject</option>
                    <option value="maths">Maths</option>
                    <option value="Higher Math">Higher Math</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-medium mb-1">Days per Week</label>
                  <select
                    defaultValue={currentListing?.days}
                    className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                    name="days"
                  >
                    <option value="">Select Days</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              {/* Class */}
              <div className="flex flex-col w-full">
                <label className="font-medium mb-1">Class</label>
                <select
                  defaultValue={currentListing?.class}
                  className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                  name="class"
                >
                  <option value="">Select a class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex flex-col w-full">
                <label className="font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={currentListing?.location}
                  placeholder="Your Location"
                  className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col w-full">
                <label className="font-medium mb-1">Time (Hour)</label>
                <input
                  type="number"
                  name="time"
                  defaultValue={currentListing?.time}
                  placeholder="Your preferred time (e.g., 5 for 5 PM)"
                  className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Salary */}
              <div className="flex flex-col w-full">
                <label className="font-medium mb-1">Salary (BDT)</label>
                <input
                  type="number"
                  name="salary"
                  defaultValue={currentListing?.salary}
                  placeholder="Your preferred salary"
                  className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222] w-full"
              >
                Update Tuition
              </button>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyTuitions;
