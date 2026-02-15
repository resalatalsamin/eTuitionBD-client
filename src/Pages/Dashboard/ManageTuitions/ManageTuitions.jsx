import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheck } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageTuitions = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: tuitionPosts = [] } = useQuery({
    queryKey: ["tuitionPosts", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pending-tuitions");
      return res.data;
    },
  });

  const updateTuitionStatus = (id, status) => {
    const updateInfo = { status: status };
    axiosSecure.patch(`pending-tuitions/${id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Tuition has been ${status}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleApproval = (id) => {
    updateTuitionStatus(id, "Approved");
  };

  const handleReject = (id) => {
    updateTuitionStatus(id, "Rejected");
  };

  return (
    <div>
      <h3 className="text-gray-600 text-center mb-10 text-3xl">
        Manage All Tuitions: {tuitionPosts.length}
      </h3>

      {/* Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Subject</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tuitionPosts.map((tuitionPost, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{tuitionPost.email}</td>
                  <td>{tuitionPost.subject}</td>
                  <td>{tuitionPost.salary}</td>
                  <td>{tuitionPost.location}</td>
                  <td>
                    {
                      <p
                        className={`${tuitionPost.status === "Approved" ? "text-green-400 font-bold" : "text-red-400 font-bold"}`}
                      >
                        {tuitionPost.status}
                      </p>
                    }
                  </td>
                  <td className="space-x-4 text-lg">
                    <button
                      className="hover:bg-green-300"
                      onClick={() => handleApproval(tuitionPost._id)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="hover:bg-red-300"
                      onClick={() => handleReject(tuitionPost._id)}
                    >
                      <MdCancel />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTuitions;
