import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { ImUserMinus } from "react-icons/im";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
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
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCont) {
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

  return (
    <div>
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
              <th>Other Actions</th>
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
                <td>Other</td>

                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
