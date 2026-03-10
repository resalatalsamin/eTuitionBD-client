import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Links } from "react-router";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tuitions">Tuitions</Link>
      </li>
      <li>
        <Link to="/tutors">Tutors</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      {user && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="shadow-sm bg-white fixed top-0 left-0 right-0 z-1000 w-full md:h-20">
      <div className="md:pt-5 pt-5 max-w-11/12 mx-auto items-center">
        <div className="">
          <div className="md:flex lg:flex items-center justify-between ">
            <div>
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
            </div>
            <div className="flex items-center justify-between lg:justify-normal gap-10">
              <div>
                <nav>
                  <ul className="hidden md:flex lg:gap-10 gap-5 font-secondary font-bold">
                    {links}
                  </ul>
                </nav>
              </div>
              <div className="">
                {user && (
                  <div className="font-primary mr-4">
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" m-1">
                        <img
                          className="rounded-full w-7 h-7 object-cover"
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
                            className="btn bg-white border border-red-500 text-red-500 font-bold hover:text-[#222222] hover:border-[#222222]"
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
                    className="btn bg-white border border-accent text-accent font-bold hover:text-[#222222] hover:border-[#222222] hidden lg:inline-block md:inline-block pt-2"
                  >
                    Login Now
                  </Link>
                )}
              </div>
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle"
              />
            </div>
          </div>

          {/* Menu Dropdown */}
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-black my-5 lg:hidden md:hidden"
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-[#253241] space-y-3 "
            >
              {links}

              {!user && (
                <Link to="/login">
                  <li className="btn bg-white border border-accent text-accent font-bold hover:text-[#222222] hover:border-[#222222] w-full mt-2">
                    Login
                  </li>
                </Link>
              )}

              {user && (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-white border border-red-500 text-red-500 font-bold hover:text-[#222222] hover:border-[#222222] w-full mt-2"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
