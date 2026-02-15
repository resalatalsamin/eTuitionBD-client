import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { ImUserMinus } from "react-icons/im";
import Swal from "sweetalert2";

import {} from "react-router";
import { IoIosRemoveCircle } from "react-icons/io";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  // Mutation for deleting user
  const deleteUserMutation = useMutation({
    mutationFn: async (userId) => {
      return await axiosSecure.delete(`/users/${userId}`);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries(["users"]);
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} marked as an Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} removed from Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${user.displayName || user.email}? This action cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete user!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserMutation.mutate(user._id, {
          onSuccess: () => {
            Swal.fire({
              title: "Deleted!",
              text: `${user.displayName || user.email} has been deleted.`,
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          },
          onError: (error) => {
            Swal.fire({
              title: "Error!",
              text: error.response?.data?.message || "Failed to delete user",
              icon: "error",
            });
          },
        });
      }
    });
  };

  return (
    <div>
      <h3 className="text-gray-600 text-center mb-10 text-3xl">
        Manage All Users: {users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>

              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div> */}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-400"
                    >
                      <ImUserMinus />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-accent"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <button
                  className="btn mt-4"
                  onClick={() => handleDeleteUser(user)}
                  disabled={deleteUserMutation.isPending}
                >
                  <IoIosRemoveCircle className="text-lg" />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
