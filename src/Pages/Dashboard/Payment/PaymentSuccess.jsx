import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          // console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <div className="mx-auto ">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 ">
            Congratulations!!
          </h2>
          <p className="text-gray-600 mb-10">Your Payment Is Successful</p>
          <p>Transaction ID: {paymentInfo.transactionId}</p>
          <p>Tracking ID: {paymentInfo.trackingId}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
