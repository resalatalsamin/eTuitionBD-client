import React from "react";
import photo from "../../../assets/Cover1.webp";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  const { signInUser, signInGoogle, setRole, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then(() => {
        // console.log(res.user);
        setRole(data.role || "student");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl text-accent"></span>
      </div>
    );
  }
  return (
    <div className=" md:flex items-center lg:py-20 pt-40 pb-20">
      <div className="flex-1 w-11/12 mx-auto md:w-0">
        <div className="md:px-50 py-8">
          <h2 className="font-bold text-4xl font-primary">
            <span className="text-accent ">Welcome</span>{" "}
            <span className="text-[#2d3748]">Back</span>{" "}
          </h2>
          <p className="font-secondary font-medium text-[#757575] text-2xl mt-1.5">
            Sign in to Continue your Journey.
          </p>
        </div>
        <div className="md:px-50 ">
          <form onSubmit={handleSubmit(handleLogin)} className="">
            <fieldset className="fieldset  ">
              {/* Email */}
              <label className="label ">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters or longer
                </p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#222222] hover:border-[#222222]">
                Login
              </button>
            </fieldset>
          </form>
          <div>
            <h4 className="text-center my-2 text-md font-secondary font-extrabold text-[#757575]">
              OR
            </h4>

            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-[#2d3748] border-[#e5e5e5] w-full border shadow mb-5"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link className="text-accent" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className=" flex-1 md:block hidden bg-base-300">
        <img className="" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Login;
