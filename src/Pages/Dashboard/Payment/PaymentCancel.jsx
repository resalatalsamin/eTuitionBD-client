import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div>
      <div className="mx-auto ">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 ">Oh Noo!!</h2>
          <p className="text-gray-600">Your Payment Has Got Cancelled</p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]"
            to="/dashboard/my-tuitions"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
