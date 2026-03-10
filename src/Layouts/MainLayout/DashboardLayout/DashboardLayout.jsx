import React from "react";
import { IoIosAddCircleOutline, IoMdList } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router";

import { FaCreditCard, FaUser } from "react-icons/fa";
import useRole from "../../../Hooks/useRole";
import { MdManageSearch } from "react-icons/md";
import { BiSolidAnalyse } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const DashboardLayout = () => {
  const { isTutor, isAdmin, isStudent } = useRole();
  // const isAdmin = role === "admin";
  // const isStudent = role === "student";
  // const isTutor = role === "tutor";

  const getDashboardTitle = () => {
    if (isAdmin) return "Admin Dashboard";
    if (isTutor) return "Tutor Dashboard";
    if (isStudent) return "Student Dashboard";
    return "Dashboard";
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="navbar h-16 w-full bg-base-300 sticky top-0 z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>

          <div className="px-4 text-lg font-semibold">
            {getDashboardTitle()}
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 bg-base-200 min-h-full">
          <ul className="menu p-4 space-y-1 mt-15 lg:mt-0">
            {/* Homepage */}
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Homepage
              </Link>
            </li>

            {/* Student Links */}
            {isStudent && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Tuitions"
                    to="/dashboard/my-tuitions"
                  >
                    <IoMdList className="text-lg is-drawer-close:hidden" />
                    My Tuitions
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Post New Tuition"
                    to="/dashboard/add-tuition"
                  >
                    <IoIosAddCircleOutline className="text-lg is-drawer-close:hidden" />
                    Post New Tuition
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Payment History"
                    to="/dashboard/payment-history"
                  >
                    <FaCreditCard className="text-lg is-drawer-close:hidden" />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Profile Settings"
                    to="/dashboard/profile-settings"
                  >
                    <IoSettingsSharp className="text-lg is-drawer-close:hidden" />
                    Profile Settings
                  </NavLink>
                </li>
              </>
            )}

            {/* Tutor Links */}
            {isTutor && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Tutor Details"
                    to="/dashboard/add-tutor-details"
                  >
                    <IoIosAddCircleOutline className="text-lg is-drawer-close:hidden" />
                    Add Tutor Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Applications"
                    to="/dashboard/my-applications"
                  >
                    <IoIosAddCircleOutline className="text-lg is-drawer-close:hidden" />
                    My Applications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Earnings"
                    to="/dashboard/my-earnings"
                  >
                    <IoIosAddCircleOutline className="text-lg is-drawer-close:hidden" />
                    My Earnings
                  </NavLink>
                </li>
              </>
            )}
            {/* Admin Links */}
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Users"
                    to="/dashboard/manage-users"
                  >
                    <FaUser className="text-lg is-drawer-close:hidden" />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Tuitions"
                    to="/dashboard/manage-tuitions"
                  >
                    <MdManageSearch className="text-lg is-drawer-close:hidden" />
                    Manage Tuitions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Reports"
                    to="/dashboard/reports"
                  >
                    <BiSolidAnalyse className="text-lg is-drawer-close:hidden" />
                    Reports & Analytics
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
