import React from "react";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Links } from "react-router";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/tuitions">
        {" "}
        <li>Tuitions</li>
      </Link>
      <Link to="/tutors">
        <li>Tutors</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>

      {user && (
        <>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
        </>
      )}
    </>
  );
  return (
    <div className="mt-0 shadow-sm bg-white fixed top-0 left-0 z-50 w-full ">
      <div className="md:pb-5 pb-2 max-w-11/12 mx-auto items-center  ">
        {/* Menu Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-accent mt-5 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-[#253241]"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-between ">
          {/* logo */}
          <Link to="/">
            {/* <img className="w-[250px]" src={logo} alt="" /> */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="font-extrabold text-4xl font-primary"
            >
              <span className="text-[#00b7a6]">e</span>
              <span className="text-[#cb6ce6]">T</span>
              <span className="text-[#38b6ff]">u</span>
              <span className="text-[#7ed957]">i</span>
              <span className="text-[#ff5757]">t</span>
              <span className="text-[#38b6ff]">i</span>
              <span className="text-[#004aad]">o</span>
              <span className="text-[rgb(255,222,89)]">n</span>
              <span className="text-[#306417]">B</span>
              <span className="text-[#5ce1e6]">D</span>
            </motion.h1>
          </Link>
          <div className="flex items-center gap-10">
            <div>
              <nav>
                <ul className="hidden md:flex gap-10 font-secondary font-semibold">
                  {links}
                </ul>
              </nav>
            </div>
            <div>
              {user && (
                <div className="font-primary mr-4">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      <img
                        className="rounded-full w-7"
                        src={user?.photoURL}
                        alt="User's photo"
                      />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-3 shadow-md space-y-2"
                    >
                      <li>
                        <h4 className=" text-[18px] font-secondary">
                          {user.displayName}
                        </h4>
                      </li>
                      <li>
                        <a className=" text-[18px] font-secondary">
                          {user.email}
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="btn bg-white border border-accent text-accent font-bold hover:text-[#222222] hover:border-[#222222] "
                        >
                          LOG OUT
                        </button>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              )}

              {user ? (
                ""
              ) : (
                <Link
                  to="/login"
                  className="btn bg-white border border-accent text-accent font-bold hover:text-[#222222] hover:border-[#222222]"
                >
                  Login Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
