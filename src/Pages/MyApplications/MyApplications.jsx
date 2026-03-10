import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-applications/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApplications(data);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to load applications",
        });
      });
  }, [user]);

  return (
    <div className="py-20 max-w-11/12 md:max-w-none mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-4xl font-primary">
          <span className="text-accent">My</span>{" "}
          <span className="text-[#2d3748]">Applications</span>
        </h2>

        <p className="font-secondary text-[#757575] text-xl mt-2">
          Tuitions you have applied to
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <table className="table">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Applicant Name</th>
              <th>Subject</th>
              <th>Expected Salary</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{app.applicantName}</td>

                <td>{app.subject}</td>

                <td>{app.expectedSalary} BDT</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      app.status === "paid"
                        ? "bg-green-400 "
                        : app.status === "Rejected"
                          ? "bg-red-400 "
                          : "bg-yellow-400 "
                    }`}
                  >
                    {app.status || "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
