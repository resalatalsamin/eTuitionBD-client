import React, { useState } from "react";
import {} from "react-hook-form";

import { FaUserEdit, FaCamera } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user } = useAuth();
  const AxiosSecure = useAxiosSecure();

  const [preview, setPreview] = useState(user?.photoURL || "");

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const updatedForm = {
      name: e.target.name.value,
      photo: e.target.photo.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    // sending data to server
    fetch(`http://localhost:3000/update-profile/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedForm),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to update Profile.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="py-20 max-w-11/12 md:max-w-none mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-bold text-4xl font-primary">
          <span className="text-accent">Update</span>{" "}
          <span className="text-[#2d3748]">Profile</span>
        </h2>
        <p className="font-secondary text-[#757575] text-xl mt-2">
          Keep your profile updated so tutors can trust you.
        </p>
      </div>

      <form onSubmit={(e) => handleProfileUpdate(e)}>
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={preview || "/default-avatar.png"}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border"
            />
          </div>
          {/* photo */}
          <fieldset className="fieldset">
            <label className="label font-bold text-[#757575]">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              defaultValue={user?.photoURL}
              onChange={(e) => setPreview(e.target.value)}
            />
          </fieldset>

          {/* Name */}
          <fieldset className="fieldset">
            <label className="label font-bold text-[#757575]">
              Student Name
            </label>

            <input
              type="text"
              className="input w-full"
              name="name"
              defaultValue={user?.displayName}
            />
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <label className="label font-bold text-[#757575]">Email</label>

            <input
              type="text"
              className="input w-full "
              name="email"
              defaultValue={user?.email}
            />
          </fieldset>

          {/* Phone */}
          <fieldset className="fieldset">
            <label className="label font-bold text-[#757575]">Phone</label>

            <input
              type="text"
              className="input w-full"
              placeholder="01XXXXXXXXX"
              name="phone"
              defaultValue={user?.phoneNumber}
            />
          </fieldset>

          {/* Submit Button */}
          <button className="btn bg-accent text-white font-bold mt-6 hover:bg-[#222222] w-full flex items-center justify-center gap-2">
            <FaUserEdit />
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
