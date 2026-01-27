import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

const TuitionApplication = () => {
  const { id: tuitionID } = useParams();
  const queryClient = useQueryClient();
  const fetchApplications = async () => {
    const response = await fetch(
      `http://localhost:3000/applications/${tuitionID}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch applications");
    }
    return response.json();
  };

  const {
    data: applications,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["applications", tuitionID],
    queryFn: fetchApplications,
    enabled: !!tuitionID,
  });

  const updateApplicationStatus = async ({ applicationId, status }) => {
    const response = await fetch(
      `http://localhost:3000/applications/${applicationId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to update application status");
    }
    return response.json();
  };

  const mutation = useMutation({
    mutationFn: updateApplicationStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["applications", tuitionID]);
    },
  });

  const handleStatusUpdate = (applicationId, status) => {
    mutation.mutate({ applicationId, status });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { bg: "bg-yellow-100", text: "text-yellow-800" },
      approved: { bg: "bg-green-100", text: "text-green-800" },
      rejected: { bg: "bg-red-100", text: "text-red-800" },
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading applications...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
            Error Loading Applications
          </h3>
          <p className="text-gray-600 text-center">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No Applications Found
          </h3>
          <p className="text-gray-600">
            There are no applications for this tuition yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Tuition Applications
          </h2>
          <p className="text-gray-600">
            Review and manage applicant submissions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                      {app.applicantName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {app.applicantName}
                      </h3>
                      <p className="text-indigo-100 text-sm flex items-center gap-1 mt-1">
                        {app.studentEmail}
                      </p>
                    </div>
                  </div>
                  {app.status === "pending" ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleStatusUpdate(app._id, "approved")}
                        disabled={mutation.isPending}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(app._id, "rejected")}
                        disabled={mutation.isPending}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    getStatusBadge(app.status)
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Subject</p>
                    <p className="text-gray-800 font-semibold">{app.subject}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Qualifications
                    </p>
                    <p className="text-gray-800 font-semibold">
                      {app.qualifications}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Experience
                      </p>
                      <p className="text-gray-800 font-semibold">
                        {app.experience} years
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Expected Salary
                      </p>
                      <p className="text-gray-800 font-semibold">
                        ৳{parseInt(app.expectedSalary).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Booked By</p>
                  <p className="text-sm text-gray-700 font-medium">
                    {app.bookedBy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuitionApplication;
