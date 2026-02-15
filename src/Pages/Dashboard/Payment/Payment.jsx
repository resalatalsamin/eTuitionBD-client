import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { applicationId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: booking } = useQuery({
    queryKey: ["booking", applicationId],
    enabled: !!applicationId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking/${applicationId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: booking.expectedSalary,
      tuitionId: booking.tuitionId,
      bookingId: booking._id,
      studentEmail: booking.studentEmail,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  console.log("booking:", booking);

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto ">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Please Confirm The Payment of{" "}
          <span className="text-accent"> ${booking.expectedSalary}</span>
        </h2>
        <div className="flex flex-col items-center">
          <button
            onClick={handlePayment}
            className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
