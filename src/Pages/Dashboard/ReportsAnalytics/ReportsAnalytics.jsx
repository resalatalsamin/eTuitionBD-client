import React from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ReportsAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  // console.log("user:", user);
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    // enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  // console.log(payments);
  return (
    <div>
      <div>
        <h3 className="text-gray-600 text-center mb-10 text-3xl">
          All Reports & Analytics
        </h3>
      </div>
      <div>
        <h4 className="text-2xl mb-5">Payment History: {payments.length}</h4>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Payment Time</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.customerEmail}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.paidAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
