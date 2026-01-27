import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl text-accent"></span>
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <div className="text-center flex flex-col items-center space-y-5">
        <p className="text-red-400 font-bold text-4xl">Access is Forbidden</p>
      </div>
    );
  }
  return children;
};

export default AdminRoute;
