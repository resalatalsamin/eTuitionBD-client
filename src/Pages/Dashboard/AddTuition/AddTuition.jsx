import React, { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddTuition = () => {
  const { user, loading: authLoading, isStudent } = useAuth();
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    // control,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    // If auth is still checking, do nothing yet
    if (authLoading) return;

    // If auth finished and user is NOT a student
    if (!isStudent) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only students can manage tuition listings!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    }
  }, [isStudent, authLoading, navigate]);

  const handleTuition = (data) => {
    AxiosSecure.post("/tuitions", data).then(() => {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your tuition has been posted",
        showConfirmButton: false,
        timer: 1500,
      });

      // console.log("After saving tuitions", res.data);
    });
  };

  return (
    <div className="py-30 max-w-11/12 md:max-w-none mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl font-primary">
          <span className="text-accent ">Add</span>{" "}
          <span className="text-[#2d3748]">Tuition</span>{" "}
        </h2>
        <p className="font-secondary font-medium text-[#757575] text-2xl mt-1.5 pb-8">
          Fill the form to find your desired tuition.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleTuition)}>
        <div className="max-w-xl mx-auto">
          {/* Class */}
          <fieldset className="fieldset">
            <label className="label font-secondary text-[#757575] font-bold">
              Class
            </label>
            <input
              type="text"
              className="input w-full px-3 py-2 font-secondary"
              placeholder="ex:  10"
              {...register("class")}
            />
          </fieldset>
          {/* Email */}
          <fieldset className="fieldset">
            <label className="label font-secondary text-[#757575] font-bold">
              Email
            </label>
            <input
              type="text"
              className="input w-full px-3 py-2 font-secondary"
              defaultValue={user.email}
              {...register("email")}
            />
          </fieldset>
          {/* Category */}
          <div className="md:flex justify-between">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[#757575]">
                Category
              </legend>
              <select
                defaultValue="Pick a category"
                className="select"
                {...register("category")}
              >
                <option disabled={true}>Pick a category</option>
                <option value="English Version">English Version</option>
                <option value="Bangla Version">Bangla Version</option>
              </select>
            </fieldset>
            {/* Subject */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[#757575]">
                Subject
              </legend>
              <select
                defaultValue="Pick a subject"
                className="select"
                {...register("subject")}
              >
                <option disabled={true}>Pick a subject</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Maths">Maths</option>
                <option value="Higher Maths">Higher Maths</option>
                <option value="Physics">Physics</option>
              </select>
            </fieldset>
            {/* Days */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[#757575]">Days</legend>
              <select
                defaultValue="Pick days"
                className="select"
                {...register("days")}
              >
                <option disabled={true}>Pick days</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
                <option value="5 Days">5 Days</option>
              </select>
            </fieldset>
            {/* Gender */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[#757575]">Gender</legend>
              <select
                defaultValue="Pick gender"
                className="select"
                {...register("gender")}
              >
                <option disabled={true}>Pick gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </fieldset>
          </div>
          <div className="md:flex justify-between items-center">
            {/* Time */}
            <fieldset className="fieldset">
              <label className="label font-bold">Time</label>
              <input
                type="number"
                className="input w-full"
                placeholder="ex: 4 PM"
                {...register("time")}
              />
            </fieldset>
            {/* Duration */}
            <fieldset className="fieldset">
              <label className="label font-bold">Duration</label>
              <input
                type="number"
                className="input w-full"
                placeholder="ex: 1.5 Hours"
                {...register("duration")}
              />
            </fieldset>
            {/* Student Count */}
            <fieldset className="fieldset">
              <label className="label font-bold">Student Count</label>
              <input
                type="number"
                className="input w-full"
                placeholder="ex: 2"
                {...register("studentCount")}
              />
            </fieldset>
          </div>
          <div className="md:flex justify-between items-center gap-3">
            {/* Salary */}
            <fieldset className="fieldset flex-1">
              <label className="label font-bold">Salary</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Salary/Budget"
                {...register("salary")}
              />
            </fieldset>
            {/* Location */}
            <fieldset className="fieldset flex-2">
              <label className="label font-secondary text-[#757575] font-bold">
                Location
              </label>
              <input
                type="text"
                className="input w-full px-3 py-2 font-secondary"
                placeholder="your location"
                {...register("location")}
              />
            </fieldset>
          </div>
          <button className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222] w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTuition;
