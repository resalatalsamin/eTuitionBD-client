import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // console.log("user:", user);
  const {
    data: payments = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["studentPayments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/student-payments?email=${user.email}`,
      );
      return res.data;
    },
  });
  // console.log(payments);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }
  return (
    <div>
      <div>
        <div>
          <h3 className="text-gray-600 text-center mb-10 text-3xl">
            All Payment History
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
    </div>
  );
};

export default PaymentHistory;
