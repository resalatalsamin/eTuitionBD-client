import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router";

const AddTutorDetails = () => {
  const { loading: authLoading, isTutor } = useAuth();
  const AxiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading) return;

    // If auth finished and user is NOT a student
    if (!isTutor) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only tutors can post tutor details",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    }
  }, [isTutor, authLoading, navigate]);

  const handleTutor = (data) => {
    AxiosSecure.post("/tutor-details", data).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your details has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });

      // console.log("After saving tuitions", res.data);
    });
  };

  return (
    <div>
      <div className="py-20 max-w-11/12 md:max-w-none mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-4xl font-primary">
            <span className="text-accent ">Add Tutor</span>{" "}
            <span className="text-[#2d3748]">Application</span>{" "}
          </h2>
          <p className="font-secondary font-medium text-[#757575] text-2xl mt-1.5 pb-8">
            Fill the form to find your desired tuition.
          </p>
        </div>
        <form onSubmit={handleSubmit(handleTutor)}>
          <div className="max-w-xl mx-auto">
            {/* Name */}
            <fieldset className="fieldset">
              <label className="label font-secondary text-[#757575] font-bold">
                Name
              </label>
              <input
                type="text"
                className="input w-full px-3 py-2 font-secondary"
                placeholder="ex: Your name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">photo is required</p>
              )}
            </fieldset>
            {/* Photo */}
            <label className="label mt-3">Your Photo URL</label>
            <input
              type="text"
              placeholder="Your photo Url"
              className="input w-full px-3 py-2 font-secondary"
              {...register("photo", { required: true })}
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">photo is required</p>
            )}

            <div className="md:flex justify-between">
              {/* Qualification */}
              <fieldset className="fieldset">
                <label className="label font-secondary text-[#757575] font-bold">
                  Qualification
                </label>
                <input
                  type="text"
                  className="input w-full px-3 py-2 font-secondary"
                  placeholder="ex: Your qualification"
                  {...register("qualification", { required: true })}
                />
                {errors.Qualification?.type === "required" && (
                  <p className="text-red-500">Qualification is required</p>
                )}
              </fieldset>
              {/* Experience */}
              <fieldset className="fieldset">
                <label className="label font-secondary text-[#757575] font-bold">
                  Experience
                </label>
                <input
                  type="text"
                  className="input w-full px-3 py-2 font-secondary"
                  placeholder="ex: Your experience"
                  {...register("experience", { required: true })}
                />
                {errors.experience?.type === "required" && (
                  <p className="text-red-500">Experience field is required</p>
                )}
              </fieldset>
              {/* Expected Salary */}
              <fieldset className="fieldset">
                <label className="label font-secondary text-[#757575] font-bold">
                  Expected Salary
                </label>
                <input
                  type="number"
                  className="input w-full px-3 py-2 font-secondary"
                  placeholder="ex: Your Expected Salary"
                  {...register("salary", { required: true })}
                />
                {errors.salary?.type === "required" && (
                  <p className="text-red-500">
                    Expected salary field is required
                  </p>
                )}
              </fieldset>
            </div>

            <button className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222] w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorDetails;
