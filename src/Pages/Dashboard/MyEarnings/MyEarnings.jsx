import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyEarnings = () => {
  const { user } = useAuth();

  const [earnings, setEarnings] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/tutor-earnings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEarnings(data.earnings);
        setTotal(data.totalEarnings);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to load earnings",
        });
      });
  }, [user]);

  return (
    <div className="py-20 max-w-11/12 md:max-w-none mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-4xl font-primary">
          <span className="text-accent">My</span>{" "}
          <span className="text-[#2d3748]">Earnings</span>
        </h2>

        <p className="font-secondary text-[#757575] text-xl mt-2">
          Earnings from your accepted tuition applications
        </p>
      </div>

      {/* Earnings Table */}
      <div className="overflow-x-auto max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <table className="table">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Subject</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {earnings.map((earning, index) => (
              <tr key={earning._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{earning.applicantName}</td>

                <td>{earning.subject}</td>

                <td>{earning.expectedSalary} BDT</td>

                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Approved
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Earnings Card */}

      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-accent text-white text-center p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold">Total Earnings</h3>

          <p className="text-3xl font-extrabold mt-2">{total} BDT</p>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
